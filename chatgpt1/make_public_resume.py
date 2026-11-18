"""Generate the privacy-conscious resume linked from the portfolio.
Only public-friendly professional information from the two uploaded resumes is used.
Requires reportlab: pip install reportlab
"""
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, HRFlowable
from reportlab.pdfbase.pdfmetrics import stringWidth
from xml.sax.saxutils import escape
from pathlib import Path

OUT = Path(__file__).parent/'assets'/'ranjitha-public-resume.pdf'
INK = colors.HexColor('#1A2A1D')
GREEN = colors.HexColor('#54773A')
MUTED = colors.HexColor('#5F6E61')
RULE = colors.HexColor('#D8E0D5')
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='ResumeName',fontName='Helvetica-Bold',fontSize=24,leading=27,textColor=INK,spaceAfter=5))
styles.add(ParagraphStyle(name='ResumeRole',fontName='Helvetica',fontSize=10.5,leading=16,textColor=GREEN,spaceAfter=10))
styles.add(ParagraphStyle(name='ResumeSection',fontName='Helvetica-Bold',fontSize=10.5,leading=12.5,textColor=GREEN,spaceBefore=9,spaceAfter=5))
styles.add(ParagraphStyle(name='ResumeBody',fontName='Helvetica',fontSize=8.5,leading=11.6,textColor=INK,spaceAfter=5))
styles.add(ParagraphStyle(name='ResumeSmall',fontName='Helvetica',fontSize=7.9,leading=10.6,textColor=MUTED,spaceAfter=4))
styles.add(ParagraphStyle(name='ResumeItem',fontName='Helvetica',fontSize=8.8,leading=11.5,textColor=INK,spaceAfter=2))

def P(text,style='ResumeBody'):
 return Paragraph(text,styles[style])
def section(title):
 return [P(title.upper(),'ResumeSection'),HRFlowable(width='100%',thickness=.6,color=RULE,spaceAfter=7)]

doc=SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=18*mm,leftMargin=18*mm,topMargin=12*mm,bottomMargin=13*mm,title='Ranjitha S | Public Resume',author='Ranjitha S')
story=[P('RANJITHA S','ResumeName'),P('Software Development · Full-Stack · AI &amp; Computer Vision  |  Bengaluru, India','ResumeRole'),
P('<link href="mailto:ranjithasgowda245@gmail.com" color="#54773A">ranjithasgowda245@gmail.com</link>   |   <link href="https://www.linkedin.com/in/ranjitha-sridhar-a5b711311/" color="#54773A">LinkedIn</link>','ResumeSmall')]
story += section('Profile')
story.append(P('Computer Science Engineering student with hands-on experience developing full-stack applications, backend REST APIs, machine learning models, and computer vision systems. Interested in backend engineering, scalable software, and applied AI.'))
story += section('Education')
story += [P('<b>RNS Institute of Technology</b>  |  B.E., Computer Science &amp; Engineering  |  2023–2027  |  CGPA: <b>9.49/10</b>','ResumeItem'),
P('Deeksha Centre for Learning — 12th: 93.5% (2023)  •  Swargarani School — 10th: 98% (2021)','ResumeSmall')]
story += section('Industry experience')
story += [P('<b>Samsung Innovation Campus</b> — Internship Trainee  |  Nov 2024 – Feb 2025','ResumeItem'),P('Industry-oriented training in Python, data structures and algorithms, competitive programming, analytical problem solving, and project-based exercises.','ResumeBody')]
story += section('Selected projects')
projects=[
('MoodSync-AI','2026 – Present','Python · FastAPI · React · TensorFlow/Keras · OpenCV','Built an emotion-recognition and music-recommendation application connecting webcam-based image processing and model inference through FastAPI endpoints with a React frontend; frontend and backend were deployed as separate services.'),
('CampusAR','2026','React · TypeScript · Node.js · PostgreSQL · PostGIS','Developed a campus wayfinding system with indoor/outdoor graph routing, GPS, QR-based relocalization, WebSockets, and AR directional guidance. Built layered Node.js APIs and spatial data integration.'),
('Real-time Sign Language Interpreter','2025','Python · OpenCV · MediaPipe · TensorFlow/Keras · CNN','Built an ASL alphabet recognition prototype using hand landmark extraction and CNN classification on live webcam frames; contributed to preprocessing, training, inference integration, and performance refinement.'),
('Events Management System','2025','React · JavaScript · HTML · CSS · APIs','Created responsive event-management pages, integrated APIs for event data, and collaborated with backend teammates on frontend integration in a four-person team.')
]
for title, date, stack, text in projects:
 story.append(KeepTogether([P(f'<b>{escape(title)}</b> <font color="#637F53">| {escape(date)}</font>','ResumeItem'),P(escape(stack),'ResumeSmall'),P(escape(text),'ResumeBody'),Spacer(1,1)]))
story += section('Technical toolkit')
story += [P('<b>Languages:</b> Python, JavaScript, TypeScript, C++, Java, C, C#','ResumeBody'),P('<b>Web / backend:</b> React, FastAPI, Node.js, HTML, CSS, ASP.NET Core Web API, REST APIs','ResumeBody'),P('<b>Data / AI:</b> PostgreSQL, PostGIS, MySQL, SQL, OpenCV, MediaPipe, TensorFlow/Keras, NumPy, Pandas, Matplotlib','ResumeBody'),P('<b>Engineering:</b> Git, GitHub, DSA, OOP, DBMS, API development, microservices fundamentals, event-driven architecture fundamentals','ResumeBody')]
story += section('Leadership & learning')
story += [P('Secretary — IEEE Consumer Technology Society  |  Member — Google Developer Student Clubs (GDSC)','ResumeBody'),P('NPTEL, IIT Madras — Demystifying Networking (78%). Topics: TCP/IP, network architectures, routing, and switching.','ResumeBody')]

def footer(canvas, doc):
 canvas.saveState(); canvas.setStrokeColor(RULE);canvas.line(19*mm,13*mm,A4[0]-19*mm,13*mm)
 canvas.setFont('Helvetica',7); canvas.setFillColor(MUTED)
 canvas.drawString(19*mm,9*mm,'Public portfolio edition · Personal address and date of birth intentionally omitted')
 canvas.drawRightString(A4[0]-19*mm,9*mm,str(doc.page));canvas.restoreState()

doc.build(story,onFirstPage=footer,onLaterPages=footer)
print(OUT)
