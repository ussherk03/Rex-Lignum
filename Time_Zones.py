import datetime
import pytz


try:
    def time_zone_of_region():
        op = input("Enter T to use today's datetime or S to fabricate your own datetime: ")
        if op == 'T':
            today = datetime.datetime.today()
            zone = input('Enter your desired timezone: ')
            td = today.astimezone(tz=pytz.timezone(zone))
            print(td)
        elif op == 'S':
             date_str = input('Enter a datetime:')
             dt = datetime.datetime.strptime(date_str, '%Y/%m/%d %H:%M:%S')
             region = input('Enter your desired timezone: ')
             tz = dt.astimezone(tz=pytz.timezone(region))
             print(tz)

    time_zone_of_region()
except pytz.UnknownTimeZoneError:
    print('UnknownTimeZoneError: Check for your TIMEZONE in the list below')
    for zt in pytz.all_timezones:
        print(zt)


try:
    def datetime_to_utc_datetime():
        date_str = input('Enter a datetime: ')
        d_time = datetime.datetime.strptime(date_str, '%Y/%m/%d %H:%M:%S')
        z = input('Enter a timezone: ')
        dt_tz = d_time.astimezone(pytz.timezone(z))

        print(dt_tz)

    datetime_to_utc_datetime()
except pytz.exceptions.UnknownTimeZoneError:
    print('Check below for your desired timezone')
    for tz in pytz.all_timezones:
        print(tz)
    raise pytz.exceptions.UnknownTimeZoneError

def convert_tz(utc_date,user_time_zone):

    my_time = datetime.datetime.strptime(utc_date, "%m/%d/%Y %H:%M:%S %p")

    timezone = pytz.timezone("utc")

    # converts the date object created from the string to a utc timezone
    my_time = timezone.localize(my_time)

    new_time =  my_time.astimezone(pytz.timezone(user_time_zone))

    print(new_time)

convert_tz("03/24/2019 09:06:15 AM","UTC")


try:
    string = input('Enter a datetime: ')
    new = datetime.datetime.strptime(string, '%d %B %Y %H %M %S %f')
    us_arizona = pytz.timezone('US/Arizona').localize(new)
    #print(us_arizona.strftime('%Y.%m.%d.%H %M:%S:%f'))
    #print(us_arizona.strftime('%Y-%m-%d'))
    print(us_arizona)
except:
    print('Error!')

d = datetime.datetime.today()
e = datetime.datetime.now(tz=pytz.timezone('US/Eastern'))
f = datetime.datetime.utcnow().replace(tzinfo=pytz.timezone('US/Eastern'))
print(d.strftime('%d %B %Y'))

#self.strftime() = converts date formats to string
#self.strptime() = converts string to date formats








