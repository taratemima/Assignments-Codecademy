def median(list_of_numbers):
    sortedList = sorted(list_of_numbers)
    n = len(sortedList)
    if n%2 == 0:
        return (sortedList[n/2-1] + sortedList[n/2])/2.0
    else:
        return sortedList[(n-1)/2]