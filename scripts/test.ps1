foreach ($item in Get-ChildItem -Recurse ..\wave.js-typescript\src)
{
    if ($item.FullName.EndsWith('.ts') -and !$item.FullName.EndsWith('.d.ts')) {
        echo $item.FullName
        $content = Get-Content $item.FullName
        @("//@ts-nocheck") + $content | Set-Content $item.FullName
    }
}
