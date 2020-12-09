using System;
using System.Collections.Generic;
using System.Linq;
using static System.Console;

class Program
{
    static int N;
    static bool[] check = new bool[N];
    static bool[] ans = new bool[N];
    static List<Data>[] L = new List<Data>[N];

    static void Main()
    {
        N = int.Parse(ReadLine());

        check = new bool[N];
        ans = new bool[N];
        L = new List<Data>[N];
        for (int i = 0; i < N; i++) L[i] = new List<Data>();
        for (int i = 0; i < N - 1; i++)
        {
            var r = ReadLine().Split().Select(int.Parse).ToArray();
            int u = r[0] - 1;
            int v = r[1] - 1;
            int w = r[2];
            L[u].Add(new Data { to = v, d = w });
            L[v].Add(new Data { to = u, d = w });
        }
        dfs(0, false);
        for (int i = 0; i < N; i++)
            WriteLine(ans[i] ? "1" : "0");
    }
    static void dfs(int a, bool b)
    {
        ans[a] = b;
        check[a] = true;
        foreach (Data i in L[a])
        {
            if (!check[i.to])
            {
                dfs(i.to, i.d % 2 == 0 ? b : !b);
            }
        }
    }
}

class Data
{
    public int to;
    public int d;
}