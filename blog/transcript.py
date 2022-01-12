import markdown
import glob
import datetime
import re

md = markdown.Markdown()

files = glob.glob("./md/*.md")
for n in range(len(files)):
    print(str(n+1) + ". " + files[n])
file = int(input("What file do you want to convert? "))-1

title = input("What should the blog posts title be? ")

post = open(files[file], "r")
template = open("template", "r")
html = template.read() + md.convert(post.read()) + "</div></body></html>"

filetitle = title.lower().replace(" ","-")
filetitle = re.sub("[^a-z\-]", "", filetitle)
blogpost = open(filetitle+".html", "w")
blogpost.writelines(html)

curdate = datetime.datetime.now()
day = str(int(curdate.strftime("%d"))) + "."
nicedate = day + curdate.strftime(" %B %Y")

blog = open("../blog.html", "r")
blogarray = blog.read().split("        <!--   new blog posts go here   -->")
newblog = blogarray[0] + '        <!--   new blog posts go here   -->\n\t\t\t\t<div class="blogpost">\n\t\t\t\t\t<a href="blog/' + filetitle + '.html">' + title + '</a><br>\n\t\t\t\t\t<span class="date">' + nicedate + '</span>\n\t\t\t\t</div>' + blogarray[1]

blog.close()
blog = open("../blog.html", "w")
blog.writelines(newblog)
