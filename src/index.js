import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//home  s=7, t=11
//appleTree, orangeTree a=5, b=15
//apple, orange m=3, n=2
// Apples fall -2 2 1
// Oranges falls 5 -6

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleDisctance = [];
  let orangeDisctance = [];
  let result = {
    apple: 0,
    orange: 0
  };
  for (let i = 0; i < apples.length; i++) {
    appleDisctance.push(apples[i] + a);

    if (appleDisctance[i] > s && appleDisctance[i] < t) {
      result.apple++;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    orangeDisctance.push(oranges[j] + b);

    if (orangeDisctance[j] > s && orangeDisctance[j] < t) {
      result.orange++;
    }
  }
  console.log(result.apple + "\n" + result.orange);
}

let test = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
