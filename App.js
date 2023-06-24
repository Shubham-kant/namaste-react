 //why 2 files - why not different file.
        //because react also works on mobile.have u heard of react native.There are different places where react is used.
        const parent = React.createElement('div',{
            id:'parent',
        },React.createElement('div',{id:'child'},[React.createElement('h1',{ id:'heading',},"hello from nested divs 1"),React.createElement('h1',{},"hello from nested divs 2")]));
        const heading = React.createElement('h1',{
            id:'head',
            className:'fef'
        },'hello hi namastey');
        console.log(React,ReactDOM);
        //react element (tags) are objects
        console.log(parent);
        //render method converts react object (here parent) into html element that browser understands.
        // React create element creates JS object
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);