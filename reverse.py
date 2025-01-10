def reverseWords(input_file, output_file):
    with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
        for line in infile:
            reversed_line = ''
            line = line.strip()
            commaAdderLine = line
            if line.endswith(","):
                print("comma detected")
                line = line[:-1].strip()
            parts = line[2:].strip().split()
            reversed_words = [word[::-1] for word in parts]

            if line.startswith('#1'):
                # Exclude reversing the first '#1'
                reversed_line = f"#1{' '.join(reversed_words)}"
                print(reversed_line)
            elif line.startswith('#2'):
                # Exclude reversing the first '#'2
                reversed_line = f"#2{' '.join(reversed_words)}"
                print(reversed_line)
            elif line.startswith('#3'):
                # Exclude reversing the first '#3'
                reversed_line = f"#3{' '.join(reversed_words)}"
                print(reversed_line)
            elif line.startswith('#4'):
                # Exclude reversing the first '#4'
                reversed_line = f"#4{' '.join(reversed_words)}"
                print(reversed_line)
            else:
                # Reverse all words
                parts = line.split()
                reversed_words = [part[::-1] for part in parts]
                reversed_line = f"{' '.join(reversed_words)}"
            
            if commaAdderLine.endswith(','): reversed_line = reversed_line + ","
            outfile.write(reversed_line + '\n')

reverseWords("text.txt", "reversed.txt")