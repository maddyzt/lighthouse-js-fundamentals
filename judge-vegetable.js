function judgeVegetable(vegetables, metric)
{
  this.val2 = metric;
  let newArr = vegetables.sort(function(a,b){ return b[this.val2] - a[this.val2] })

  return newArr[0].submitter;
  

}
