#include <iostream>
#include <map>
#include <set>
#include <vector>
#include <limits>

size_t N, M;

struct Edge
{
	size_t from;
	size_t to;
	long  long cost;
};

std::vector<Edge> es;
std::vector<long long> high_score(2000);

void RecieveInput()
{
	std::cin >> N >> M;
	es.resize(M);
	size_t from, to;
	long long cost;
	for (auto idx = size_t(0); idx < M; idx++) {
		std::cin >> from >> to >> cost;
		es[idx].from = from - 1;
		es[idx].to = to - 1;
		es[idx].cost = cost;
	}
}

int main()
{
	RecieveInput();

	for (auto& ite: high_score)
	{
		ite = std::numeric_limits<long long>::min();
	}
	high_score[0] = 0;

	auto loop_count = 0;
	while (true) {
		bool updated = false;
		for (auto idx = size_t(0); idx < M; idx++) {
			auto from = es[idx].from;
			auto to = es[idx].to;
			auto cost = es[idx].cost;
			if ((high_score[from] != std::numeric_limits<long long>::min())
				&& (high_score[to] < high_score[from] + cost)) {
				high_score[to] = high_score[from] + cost;
				updated = true;
			}
		}
		if (!updated) break;
		if (loop_count > 20000) {
			break;
		}
		loop_count++;
	}

	auto tmp = high_score[N - 1];
	for (auto idx = 0; idx < 2000; idx++) {
		for (auto idx = size_t(0); idx < M; idx++) {
			auto from = es[idx].from;
			auto to = es[idx].to;
			auto cost = es[idx].cost;
			if ((high_score[from] != std::numeric_limits<long long>::min())
				&& (high_score[to] < high_score[from] + cost)) {
				high_score[to] = high_score[from] + cost;
			}
		}
	}

	if (tmp == high_score[N - 1]) {
		std::cout << high_score[N - 1] << std::endl;
	}
	else {
		std::cout << "inf" << std::endl;
	}
}

