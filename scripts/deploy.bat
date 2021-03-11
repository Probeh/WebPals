compodoc -p tsconfig.json -d src/docs -n WebPals-Hub src --hideGenerator --theme readthedocs & robocopy /mir /s /e . %onedrive%\\snapshots\\WebPals-Hub\\snapshot-%date:~0,2%-%date:~3,2%-%date:~-4%_%random% /xd "node_modules" /xd ".git" /xd "dist" /xd "docs" /xd "e2e" & ng build --prod & git add . & git commit -m "Application Update" & git push -u origin main & firebase deploy & start chrome https://webpals-hub.web.app/ & ng serve --open