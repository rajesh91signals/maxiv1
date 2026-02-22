#!/usr/bin/env python3
# Remove old/conflicting CSS between program stack markers

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '/* Programs Stacked Layout (Light Theme) */'
end_marker = '/* FAQ Section */'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1:
    print('ERROR: start not found')
    exit(1)

if end_idx == -1:
    print('ERROR: end not found')
    exit(1)

print(f'Removing CSS chars {start_idx} to {end_idx}')
removed = content[start_idx:end_idx]
print(f'Removing {len(removed)} chars')

stub = '''/* (Old program card CSS removed - see new stacked card styles above) */

'''

new_content = content[:start_idx] + stub + content[end_idx:]

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'Done! Original: {len(content)}, New: {len(new_content)} chars')
