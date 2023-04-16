let sampleDivs = document.getElementsByClassName("sample-text");

console.log(sampleDivs)

for (let div of sampleDivs) {
    console.log(div);
    div.innerHTML = 
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui. Justo donec enim diam vulputate ut pharetra sit. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Nulla posuere sollicitudin aliquam ultrices. Posuere ac ut consequat semper viverra nam. Quam lacus suspendisse faucibus interdum. Eu sem integer vitae justo. Velit euismod in pellentesque massa placerat. Magna ac placerat vestibulum lectus mauris. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Tincidunt vitae semper quis lectus nulla at volutpat diam. At auctor urna nunc id cursus metus aliquam. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis.</p>
    `}