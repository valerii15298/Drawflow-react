#Requires -Version 7

try
{
    $cors = Start-Job -ScriptBlock { node ..\cors-server\index.js }
    $nestApp = Start-Job -ScriptBlock { Set-Location ..\nest-projects\nestproj\; pnpm start }
    $reactApp = Start-Job -ScriptBlock { pnpm dev }
    .\scripts\checkTypes.ps1
    write-host "Running..."
}
catch
{
    write-host "Problem occured!"
}
finally
{
    $cors.StopJob()
    $nestApp.StopJob()
    $reactApp.StopJob()
}
