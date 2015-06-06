def scrabble_score(word):
    word_total = 0
    for letter in word:
        word_total = word_total + score[letter.lower()]
    return word_total 
