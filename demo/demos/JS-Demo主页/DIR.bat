@echo off&setlocal enabledelayedexpansion
cd demos
echo ^<?xml version="1.0" encoding="GB18030"?^>>list.xml
echo ^<urls^>>>list.xml
for /f "delims=" %%i in ('dir /a-d/b /AD') do (
set "tt=%%i"
set tt=!tt:\=/!
echo ^<url^>!tt!^<^/url^>>>list.xml)

echo ^<^/urls^>>>list.xml

