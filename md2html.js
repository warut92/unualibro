function convert_markdown() {
//get all md
let markdown_input = document.getElementById("markdown").innerHTML;
//pair tags
//list
markdown_input = markdown_input.replace(/- (.*)/g, '<li>$1</li>')
//on working!
// markdown_input = markdown_input.replace(/^<li>(.*)$<\/li>/m, '<ul>$1</ul>')
//italic and bold
markdown_input = markdown_input.replace(/\*\*\*(.+?)\*\*\*/g, '<b><i>$1</b></i>')
//bold
markdown_input = markdown_input.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
markdown_input = markdown_input.replace(/\_\_(.+?)\_\_/g, '<b>$1</b>')
//italic
markdown_input = markdown_input.replace(/\*(.+?)\*/g, '<i>$1</i>')
markdown_input = markdown_input.replace(/_(.+?)_/g, '<i>$1</i>')
//strike
markdown_input = markdown_input.replace(/\~\~(.+?)\~\~/g, '<s>$1</s>')

//code
markdown_input = markdown_input.replace(/`(.+?)`/g, '<code>$1</code>')
//blockqoute
markdown_input = markdown_input.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')
//img
markdown_input = markdown_input.replace(/!\[(.+?)\]\((.+?)\)\((.+?)x(.+?)\)/g, '<img alt="$1" src="$2" width="$3" height="$4">')
//img without width and height
markdown_input = markdown_input.replace(/!\[(.+?)\]\((.+?)\)/g, '<img alt="$1" src="$2" width="auto" height="auto">')
//link
markdown_input = markdown_input.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
//headers
markdown_input = markdown_input.replace(/###### (.*)$/gm, "<h6>$1</h6>")
markdown_input = markdown_input.replace(/##### (.*)$/gm, "<h5>$1</h5>")
markdown_input = markdown_input.replace(/#### (.*)$/gm, "<h4>$1</h4>")
markdown_input = markdown_input.replace(/### (.*)$/gm, "<h3>$1</h3>")
markdown_input = markdown_input.replace(/## (.*)$/gm, "<h2>$1</h2>")
markdown_input = markdown_input.replace(/# (.*)$/gm, '<h1>$1</h1>')
markdown_input = markdown_input.replace(/^(#+) (.*)$/gm, '<h$1>$2</h$1>')

//unpair tags
markdown_input = markdown_input.replace(/\n(?=\s)/g, "\n<br>")
markdown_input = markdown_input.replace(/^([*\-=_] *){3,}$/gm, "<hr>")

// my customization
//center
markdown_input = markdown_input.replace(/\---center\n(.+?)(?=(\n|$){2})/gm, '<center>$1</center>')

// document.getElementById("markdown").innerHTML = markdown_input
document.getElementById("html").innerHTML = markdown_input
}
convert_markdown()
//
