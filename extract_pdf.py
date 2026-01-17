import PyPDF2

files = [
    r'e:\ILLUSTRATED SOP wound clex.pdf',
    r'e:\ILLUSTRATED SOP FOR HERA WOUND GEL.pdf', 
    r'e:\ILLUSTRATED SOP FOR WOUND CARE GAUZE.pdf'
]

for f in files:
    print('='*80)
    print(f'FILE: {f}')
    print('='*80)
    try:
        with open(f, 'rb') as pdf_file:
            reader = PyPDF2.PdfReader(pdf_file)
            for i, page in enumerate(reader.pages):
                print(f'\n--- Page {i+1} ---')
                text = page.extract_text()
                print(text if text else '[No text extracted]')
    except Exception as e:
        print(f'Error: {e}')
    print('\n')
