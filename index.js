import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
inquirer
.prompt([{
message:"type you url",
name:"URL",
}
]
)
.then((answer)=>{
const url = answer.URL;
const qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));
})
