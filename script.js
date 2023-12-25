let curPageSelected = 'DashBoard';

let ids = ['DashBoard']


function updateSelectedPage(id)
{
    let pastItem = document.getElementById(curPageSelected); 

    pastItem.style.backgroundColor = '#262450';

    curPageSelected = id
    let curItem = document.getElementById(id); 

    curItem.style.backgroundColor = '#141326';
}