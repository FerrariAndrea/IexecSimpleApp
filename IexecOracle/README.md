# IexecSimpleApp

[Official guide](https://docs.iex.ec/for-developers/your-first-app)

# Steps

1.  scripts\build.bat
2.  scripts\runLocally.bat
3.  scripts\dockerPush.bat <docker-usernamed>
4.  copy chacksum from docker to iexec.json
5.  scripts\onChainDeploy.bat
6.  scripts\runOnChain.bat
7.  scripts\getResults.bat <task-id>
8.  iexec app publish --chain viviani
9.  iexec orderbook app 0x8661128290105EcD736E703aE7E95B23dda24271
10. iexec app run --args "41.90 12.49" --watch --chain viviani


# Different RUN test

1.  Normal run
2.  Only computedJsonObj has random
3.  Only result.txt has random
4.  Both computedJsonObj and result.txt have random

1.  iexec app run --args "41.90 12.49" --watch --chain viviani
2.  iexec app run --args "41.90 12.49 B" --watch --chain viviani
3.  iexec app run --args "41.90 12.49 D" --watch --chain viviani --trust 0
4.  iexec app run --args "41.90 12.49 C" --watch --chain viviani