#Ref: https://stackoverflow.com/questions/19562790/how-to-store-html-form-data-into-file - Sudipta Chatterjee / Oct 24 '13 at 10:05
#!usr/bin/python

import cgi
import cgitb
cgitb.enable()

form = cgi.FieldStorage()
with open ('fileToWrite.txt','w') as fileOutput:
    fileOutput.write(form.getValue('answer'))
    