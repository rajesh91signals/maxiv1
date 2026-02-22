with open("_clean_list.css", "r") as f:
    css = f.read()
with open("styles.css", "a") as f:
    f.write("\n" + css)
