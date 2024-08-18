//  if statement

if (true) {
  // console.log('This will always run');
}
if (false) {
  // console.log('This will never run');
}

const typographyData = [
  {title: 'Crypography', type: 'heading', description: 'This is a heading'},
  {title: 'Block Chain', type: 'heading another', description: 'This is a another heading'},
  {title: 'Bitcoin', type: 'heading', description: 'This is a heading'},
  {title: 'Ethereum', type: 'heading another', description: 'This is a another heading'},
]

if (typographyData.length > 0) {
  // console.log('Typography data is available');
} else {
  // console.log('Typography data is not available');
}

for (let i = 0; i < typographyData.length; i++) {
  if (typographyData[i].type === 'heading') {
    // console.log(`Title: ${typographyData[i].title}`);
    // console.log(`Description: ${typographyData[i].description}`);
  } else if (typographyData[i].type === 'heading another') {
    // console.log(`Another Title: ${typographyData[i].title}`);
    // console.log(`Another Description: ${typographyData[i].description}`);
  } else {
    // console.log('Unknown typography type');
  }
}

const reversedData = [...typographyData].reverse();

if (reversedData.slice(0, 2).length < 5) {
  console.log('Typography data is less than 5');
for(let i = 0; i < typographyData.length; i++) {
  console.log(`Title: ${typographyData[i].title}`);
  console.log(`Description: ${typographyData[i].description}`);
}
} else {
  console.log('Typography data is more than 5');
}