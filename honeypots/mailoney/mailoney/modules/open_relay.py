__author__ = '@awhitehatter'

'''
Open relay module, will dump emails into a message log file

Thanks to:
https://djangosnippets.org/snippets/96/
https://muffinresearch.co.uk/fake-smtp-server-with-python/ (@muffinresearch)
'''

import sys
import os
import asyncore
from smtpd import SMTPServer

def or_module():

    class OpenRelay(SMTPServer):

        def process_message(self, peer, mailfrom, rcpttos, data):
            #setup the Log File
            if os.path.exists('logs/mail.log'):
                logfile = open('logs/mail.log', 'a')
            else:
                logfile = open('logs/mail.log', 'w')

            dictmap = dict({'ipaddr' : peer[0], 'mail to' : mailfrom, 'mail from' : rcpttos[0], 'data' :data })
            tmpstr= mailfrom+' ' + rcpttos[0] + ' ' + data
            res = re.findall("\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b", tmpstr)
            print res
            json.dump(dictmap, logfile)
            logfile.close

    def run():
        sys.path.append("../")
        import mailoney

        honeypot = OpenRelay((mailoney.bind_ip, mailoney.bind_port), None)
        print '[*] Mail Relay listening on {}:{}'.format(mailoney.bind_ip, mailoney.bind_port)
        try:
            asyncore.loop()
        except KeyboardInterrupt:
            print 'Detected interruption, terminating...'
    run()
