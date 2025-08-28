SET Tables=MutiLanguageConfigs.xlsx

SET OutName=configs

tabtoy.exe ^
--mode=v2 ^
--json_out=%OutName%.json ^
--combinename=DataConfig ^
--lan=zh_cn ^
--csharp_out=%OutName%.cs ^
%Tables%

dotnet cs2ts %OutName%.cs -pc
pause
chcp 65001
@echo off&setlocal EnableDelayedExpansion
for /f "delims=" %%i in ('type configs.ts') do (
    set "str=%%i"
    set "str=!str:tableLogger: Logger;=//tableLogger: Logger;!"
    @echo !str! >>tmpConfig.ts
)

pause
move configs.json ../assets/resources/data/%OutName%.json
move tmpConfig.ts ../assets/ymtScripts/game/%OutName%.ts
del %OutName%.ts
del %OutName%.cs
pause