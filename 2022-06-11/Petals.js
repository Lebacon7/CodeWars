/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/
const howMuchILoveYou = (nBpetals) =>
    nBpetals%6==1? 'I love you': nBpetals%6==2? 'a little':  nBpetals%6==3? 'a lot':
    nBpetals%6==4? 'passionately':  nBpetals%6==5? 'madly': 'not at all';
console.log(howMuchILoveYou(3))