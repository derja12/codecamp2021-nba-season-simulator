import json
import os.path

class DummyDB:

    ### USAGE EXAMPLE:
    #
    #  >>> from dummydb import DummyDB
    #
    #  >>> db = DummyDB('mydatabase.db')
    #  >>> newRecord = { 'conditions': 'rain', 'temp': 55 }
    #  >>> db.saveRecord(newRecord)
    #
    #  >>> db = DummyDB('mydatabase.db')
    #  >>> allRecords = db.readAllRecords()
    #  >>> print(allRecords)
    #  [{'conditions': 'rain', 'temp': 55}]
    #
    ###

    def __init__(self, filename, initialItem):
        self.filename = filename
        if not os.path.isfile(filename):
            with open(self.filename, 'w') as f:
                json.dump(initialItem, f)

    def recordMessage(self, message):
        all = self.readAllRecords()
        all.append(message)
        with open(self.filename, 'w') as f:
            json.dump(all, f)

    def overwriteRecord(self, record):
        with open(self.filename, 'w') as f:
            json.dump(record, f)

    def readAllRecords(self):
        with open(self.filename, 'r') as f:
            return json.load(f)
