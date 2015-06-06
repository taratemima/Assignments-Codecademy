def anti_vowel(text):
    vowels = 'aeiou'
    product = ''
    for letter in text:
        if letter.lower() not in vowels:
            product = product+letter 
    return product 
