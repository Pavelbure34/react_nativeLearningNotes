const pages = {
    d01:
        '<h2>Day01-Why React Native?</h2>\
        <article>\
            Mobile market has been divided by two big stars.<Br>\
            Of course, we are talking about <span class="emphasisBlue">Android</span>\
            and <span class="emphasisBlue">Apple</span><br>.\
            <span class="emphasisRed">React-Native</span> allows to make your code\
            work for both platforms.<br>\
            Cool! Now let us get to real lessons.<Br>\
            <img id="img1">\
        </article>',
    d02:
        '<h2>day02-Basics! Components</h2>\
        We are gonna care MUCH about <span class="emphasisBlue">index.js</span>.<br>\
        Anything we see in the screen is <span class="emphasisRed">components</span>.<br>\
        <blockquote>\
            components = any kind of widget visually visible in the App.\
            <div>\
                <sub>It can be modified at any methods.</sub>\
            </div>\
        </blockquote>\
        Application we make is\
            <span class="emphasisBlue">systemetic collection of components.</span>.<br>\
        In order to do that, let us see tweak our <span class="emphasisBlue">index.js</span><br>\
        <article>\
            <div class="clearBoth"></div>\
            <div id="imgSide" class="floatLeft">\
                <img>\
            </div>\
            <div id="textSide" class="floatLeft">\
                <ol>\
                    <caption>How our App works</caption>\
                    <li>import libraries to use</li>\
                        <div>\
                            Only by import we can get<br>\
                            access to outside sources.\
                        </div>\
                    <li>make components</li>\
                        <div>\
                            Note the tag similar to HTML!<br>\
                            It is <span class="emphasisRed">JSX</span>,<br>\
                            which is js extension for React component.<br>\
                            It follows the same practice as HTML.<br>\
                        </div>\
                    <li>render them to the screen</li>\
                        <div>\
                            In order to work ReactNative App,<br>\
                            We have to at least register<br>\
                            one component. On the circular spot<br>\
                            Make sure string within the single quote<br>\
                            matches your project name.!!!\
                        </div>\
                </ol>\
            </div>\
            <div class="clearBoth"></div>\
        </article>\
        Note that..\
        <ul>\
            <caption>Difference between two libraries</caption>\
            <li>React</li>\
                <article>\
                    React knows components and <br>\
                    How they behave.<br>\
                </article>\
            <li>React-Native</li>\
                <article>\
                    It is a helper for mobile-izing.<br>\
                </article>\
            <li>JSX is in ReactNative library and cannot get access to it from outside.</li>\
                <article>\
                    We use <span class="emphasisBlue">import destructuring</span>.\
                </article>\
        </ul>',
    d03:
        '<h2>Day03 Outline your Application.</h2>\
        Before we code our app, make sure you design your floorplan<br>\
        of the application! Then label each <span class="emphasisBlue">component.</span>\
        <div id="divideBox1">\
            <div class="clearBoth"></div>\
            <div id="imgSide1" class="floatLeft">\
                <img>\
            </div>\
            <div id="textSide1" class="floatLeft">\
                <ul>\
                    <caption>When outlining,</caption>\
                    <li>Make sure you reuse component as much as possible.</li>\
                    <li>Do not use too much components.</li>\
                    <li>Build a <span class="emphasisBlue">tree of hierarchy of components</span>.</li>\
                    <li>Make every child component <span class="emphasisBlue">exportable</span>!</li>\
                </ul>\
            </div>\
        </div>\
        <div class="clearBoth"></div>\
        <div id="divideBox2">\
            <div id="imgSide2" class="floatLeft">\
                <img>\
            </div>\
            <div id="textSide2" class="floatLeft">\
                <ul>\
                    <caption>How to use exportable component,</caption>\
                    <li>Use <span class="emphasisRed">component nesting method</span> to reuse component.</li>\
                    <ol>\
                        <li>Import the header</li>\
                        <li>Nest imported comp. within the root comp.</li>\
                        <li>When using imported comp., use it like html tag.</li>\
                        <li>But put the name of the comp.in it.</li>\
                    </ol>\
                    <li>It is applicable for every comp. you make.</li>\
                </ul>\
            </div>\
            <div class="clearBoth"></div>\
        </div>\
        Also Note that..\
        <ul>\
            <caption>Important things to remember</caption>\
            <li>We use <span class="emphasisBlue">one component</span> per <span class="emphasisBlue">file</span>.</li>\
            <li>We create <span class="emphasisBlue">new js file for each new component</span>.</li>\
            <li>It is useful for make <span class="emphasisBlue">a separate folder</span> for components!</li>\
            <li>Always name the component object same as the js file.</li>\
            <li>As app gets bigger, you will build a tree of components.</li>\
            <li>Only <span class="emphasisRed">the root component</span>\
                has <span class="emphasisBlue">AppRegistry</span></li>\
            <li>Make sure all the other components are <span class="emphasisRed">exportable</span>.</li>\
            <li>When importing exportable comp. do not write <span class="emphasisBlue">.js</span>\
                at the end if it is js file.</li>\
            <li>Make sure you test your comp!</li>\
        </ul>',
    d04:
        '<h2>day04-Style your App!</h2>\
        <div style="width:800px;height:400px;">\
            There is gonna be use if your application<br>\
            looks very dull and boring. Therefore, it is important to style them!<br>\
            <div class="clearBoth"></div>\
            <img src="img/day04/style.png" style="height:338px;height:385px;" class="floatLeft">\
            <div style="width:360px;height:400px;overflow:auto;" class="floatLeft">\
                <ul>\
                    <caption>Things to know</caption>\
                    <li>Styling in React-Native is 100% manual</li>\
                    <li>We write our styling code within component js file.</li>\
                    <li>Make separate object called <span class="emphasisBlue">styles</span>.</li>\
                    <li>Follow syntax <span class="emphasisBlue">similar yer different</span> from CSS grammar.</li>\
                    <li>React-Native uses <span class="emphasisBlue">CamelCase</span> instead of Dash-case from CSS</li>\
                    <li>Yet follows similar style names in CSS.</li>\
                    <li>In order to make stlying work, use\
                        <span class="emphasisRed">Destructuring referenceing style</span>.</li>\
                    <li>When applying the style, follow simlar html style tag</li>\
                </ul>\
            </div>\
            <div class="clearBoth"></div>\
        </div>\
        <div>\
            <div style="width:400px;height:500px;overflow:auto;" class="floatLeft">\
                <div style="margin-top:10px;">\
                    <img src="./img/day04/MoreOnStyling.png" style="width:385px; height:409px;">\
                    <sub style="margin-left:70px;">Applying new Styling tag</sub>\
                </div>\
                <div style="margin-top:10px;">\
                    <img src="img/day04/styleApplied.png" style="width:378px; height:456px;">\
                    <sub style="margin-left:70px;">Applied Result</sub>\
                </div>\
            </div>\
            <div style="width:440px; height:600px;" class="floatLeft">\
                In order to make our Text prop visually appealing,<br>\
                We are gonna do more in detail styling. For this time,<br>\
                <span class="emphasisBlue">View</span> Tag will be used.\
                <blockquote>\
                    <span class="emphasisBlue">View</span><br>\
                    React-Native Library that <span class="emphasisRed">position</span><br>\
                    ,<span class="emphasisRed">wrap</span>,<span class="emphasisRed">style</span>\
                    the element.\
                    <div>\
                        <sub>It is highly utilizable in any method.</sub><br>\
                        <sub>Make sure you use View Tag well.</sub>\
                    </div>\
                </blockquote>\
                Just Like explained as above,\
                <ul>\
                    <li>Make another Styling object within Styles</li>\
                    <li>Use <span class="emphasisBlue">destructuring method</span> to apply the styling.</li>\
                    <li>Use JSX tag like HTML</li>\
                    <li>Style it like <span class="emphasisBlue">HTML</span> too</li>\
                </ul>\
            </div>\
            <div class="clearBoth"></div>\
        </div>',
    d05:
        '<h2>Day05-Introduction to FlexBox</h2>\
        In order to locate our text element to whereever we want,<br>\
        We use <span class="emphasisRed">flexbox</span>.\
        <blockquote>\
            <span class="emphasisRed">Flexbox</span>=\
            a techniq to locate a container within a container.\
        </blockquote>\
        <div>\
            <div class="clearBoth"></div>\
            <div style="width:380px; height:610px;overflow:auto;" class="floatLeft">\
                <div>\
                    <img src="img/day05/flexboxStyle.png" style="width:320px; height:602px;"><br>\
                    <sub style="margin-left:20px;">New Stlye Keyword</sub>\
                </div>\
                <div style="margin-top:8px;">\
                    <img src="img/day05/styleApplied.png" style="width:400px;height:602px;">\
                    <sub style="margin-left:20px;">Applied Screen</sub>\
                </div>\
            </div>\
            <div style="width:400px;height:610px;overflow:auto;" class="floatL\eft">\
                <ul>\
                    <caption>Few Important</caption>\
                    <li><span class="emphasisBlue">By default</span>\
                        ,any element will be located<span class="emphasisBlue">top left corner.</span></li>\
                    <li>Flexbox in React-Native works similar to CSS one but with slight difference.</li>\
                    <li>Styling keyword is basically CSS.</li>\
                </ul>\
                <ul style="list-style-type: none;">\
                    <caption>Useful properties</caption>\
                    <li><span class="emphasisBlue">justifyContent</span>:set up\
                            <span class="emphasisBlue">vertical position</span>.</li>\
                            <ul>\
                                <caption>available options</caption>\
                                <li><span class="emphasisBlue">flex-end</span>: locate the element\
                                    to the<span class="emphasisBlue">bottom</span></li>\
                                <li><span class="emphasisBlue">center</span>:locate the element to\
                                <span class="emphasisBlue">the middle</span></li>\
                                <li><span class="emphasisBlue">flex-start</span>:locate the element to \
                                <span class="emphasisBlue">the top also Default</span></li>\
                            </ul>\
                    <li><span class="emphasisBlue">alignItems</span>:set up\
                        <span class="emphasisBlue">horizontal position</span></li>\
                        <ul>\
                            <caption>available options</caption>\
                            <li><span class="emphasisBlue">flex-end</span>: locate the element\
                                to the<span class="emphasisBlue">right</span></li>\
                            <li><span class="emphasisBlue">center</span>:locate the element to\
                                <span class="emphasisBlue">the middle</span></li>\
                            <li><span class="emphasisBlue">flex-start</span>:locate the element to \
                                <span class="emphasisBlue">the left also Default</span></li>\
                        </ul>\
                    <li><span class="emphasisBlue">shadowColor</span>:set up<span class="emphasisBlue">shadow color</span></li>\
                    <li><span class="emphasisBlue">shadowOffset</span>:set up<span class="emphasisBlue">shadow direction</span></li>\
                        <ul>\
                            <caption>Options</caption>\
                            <li>width:width of your shadow</li>\
                            <li>height: height of your shadow</li>\
                        </ul>\
                    <li><span class="emphasisBlue">shadowOpacity</span>:set up <span class="emphasisBlue">how dark it is</span></li>\
                        <ul>\
                            <li>Range from 0 and 1</li>\
                        </ul>\
                    <li><span class="emphasisBlue">position</span>:set up <span class="emphasisBlue">\
                            how it will locate itself</span></li>\
                        <ul>\
                            <caption>Options</caption>\
                            <li><span class="emphasisBlue">relative</span>:element locates relatively.</li>\
                            <li><span class="emphasisBlue">static</span>:<span class="emphasisBlue">default option</span></li>\
                                <div>\
                                    element flows from top to bottom.\
                                </div>\
                            <li><span class="emphasisBlue">fixed</span>:Element is fixed at the screen.</li>\
                                <div>\
                                    it will follow user even when scrolling.\
                                </div>\
                            <li><span class="emphasisBlue">absolute</span>:stays relative to ancestral or first element.</li>\
                        </ul>\
                </ul>\
            </div>\
            <div class="clearBoth"></div>\
        </div>',
    d06:
        '<h2>Day06 Make element more UI friendly</h2>\
        In order to make our <span class="emphasisBlue">Header</span> element,<br>\
        more UI friendly, we make it accept any text input.<br>\
        In order to do so, we will use <span class="emphasisRed">prop</span>.\
        <blockquote>\
            <span class="emphasisRed">Prop</span> =\
            allows App <span class="emphasisBlue">modify</span> child element.\
            <div style="list-style-type: none;">\
                <ul>\
                    <li><sub>primary reason that elment is reusable.</sub></li>\
                </ul>\
            </div>\
        </blockquote>\
        <div class="clearBoth"></div>\
        <div style="height:520px;">\
            <div style="overflow:auto;" class="floatLeft">\
                <div>\
                    <img src="img/day06/propCode1.png" style="width:400px;height:200px;">\
                    <br>\
                    <sub style="margin-left:80px"><b>props in element</b></sub>\
                </div>\
                <div style="margin-top:10px;">\
                    <img src="img/day06/propCode2.png" style="width:440px;height:200px;">\
                    <br>\
                    <sub style="margin-left:80px"><b>using in Index.js</b></sub>\
                </div>\
            </div>\
            <article style="overflow:auto;" class="floatLeft">\
                <ul>\
                    <caption>How to use prop</caption>\
                    <li>first rule</li>\
                        <div>\
                            apply <span class="emphasisBlue">props</span><br>\
                            to parent element of target\
                        </div>\
                    <li>second rule,</li>\
                        <div>\
                            To corresponding text,<br>\
                            use <scan class="emphasisBlue">curly bracket</scan>.\
                        </div>\
                    <li>third Rule</li>\
                        <div>\
                            Props name can be anything<br>\
                                but recommended to use<br>\
                            <scan class="emphasisBlue">sensible one</scan>.\
                        </div>\
                    <li>fourth Rule</li>\
                        <div>\
                            in <span class="emphasisBlue">index.js</span>,<br>\
                            specify text for the element.\
                        </div>\
                    <li>fifth Rule</li>\
                        <div>\
                            Use it like <span class="emphasisBlue">style</span><br>\
                            property in html.\
                        </div>\
                    <li>sixth Rule</li>\
                        <div>\
                            text should be between <span class="emphasisBlue">curly braces</span><br>\
                            and then between <span class="emphasisBlue">single quote</span>.\
                        </div>\
                </ul>\
            </article>\
        </div>\
        <div class="clearBoth"></div>\
        <div>\
            <div style="margin-left:300px;">\
                <img src="img/day06/propApplied.png" style="width:320px;height:260px;">\
                <br>\
                <sub style="margin-left:80px"><b>Prop Applied</b></sub>\
            </div>\
        </div>',
    d07:
        '<h2>Day07-List and Class based Component</h2>\
        <div class="clearBoth"></div>\
        <div>\
            For which ever component we make,<br>\
            <span class="emphasisBlue">Boiler template</span> will be used.<br>\
            Which is the basic template we have written in the beginning.<br>\
            Then what do we do? if we want to dynamically represent the app?\
        </div>\
        <div class="clearBoth"></div>\
        <div>\
            In order to fetch data from database, we will use\
            <span class="emphasisRed">class based component</span>.<br>\
            What is the <span class="emphasisBlue">difference</span> between previously used components?\
            <article style="height:150px;border:1px solid black;">\
                <div class="clearBoth"></div>\
                <div style="width:400px;height:150px;overflow:auto;border-right:1px solid black;" class="floatLeft">\
                    <ul>\
                        <caption>Functional Comp</caption>\
                        <li style="margin-bottom:10px;">it <span class="emphasisBlue">\
                        cannot fetch data</span> from database.</li>\
                        <li><span class="emphasisBlue">cannot specify</span> when to render(static).</li>\
                        <li><span class="emphasisBlue">Convenctionally</span> used\
                                for <span class="emphasisBlue">static presentation</span>.</li>\
                    </ul>\
                </div>\
                <div style="width:400px;height:150px;overflow:auto;" class="floatLeft">\
                    <ul>\
                        <caption>Class Comp</caption>\
                        <li style="margin-bottom:10px;">it <span class="emphasisBlue">\
                        can fetch data</span> from database.</li>\
                        <li><span class="emphasisBlue">can specify</span> when to render(dynamic).</li>\
                        <li><span class="emphasisBlue">Conventionally</span> used for\
                            <span class="emphasisBlue">fetched data</span> and\
                            <span class="emphasisBlue">organizing codes</span>.</li>\
                    </ul>\
                </div>\
                <div class="clearBoth"></div>\
            </article>\
            <article>\
                <h4 style="text-align: center;">how to convert from\
                        <span class="emphasisBlue">functional</span> to\
                        <span class="emphasisBlue">class</span> composition.</h4>\
                <div style="height:460px;">\
                    <div class="floatLeft">\
                        <img src="img/day07/functional.png" style="width:402px;height:434px;padding-right:20px;">\
                        <br><sub style="margin-left:100px;">functional Component</sub>\
                    </div>\
                    <div class="floatLeft">\
                        <img src="img/day07/class.png" style="width:381px;height:452px;">\
                        <br><sub style="margin-left:100px;">Class Component</sub>\
                    </div>\
                </div>\
                <div class="clearBoth"></div>\
                <div>\
                    <ol style="list-style-type:lower-roman;">\
                        <caption>Step by step...</caption>\
                        <li>import <span class="emphasisBlue">Component</span> from\
                                <span class="emphasisBlue">React</span> as shown in photo.</li>\
                        <li>write a java class <span class="emphasisBlue">extending Component</span></li>\
                        <li>Use <span class="emphasisBlue">render(){ }</span></li>\
                        <li><span class="emphasisBlue">Remove ; </span>at the end of class.</li>\
                    </ol>\
                </div>\
            </article>\
        </div>\
        <div class="clearBoth"></div>',
    d08:
        '<h2>day08-Life cycle method</h2>\
        <div style="width:600px;margin-left:50px;border:1px solid black;margin-bottom:10px;">\
            <blockquote>\
                <ul style="list-style-type: none">\
                    <li>\
                        <span class="emphasisRed">Life cycle method</span>\
                        allows <span class="emphasisBlue">class components</span> to generate JSX in\
                        <span class="emphasisBlue">desired timing</span>.\
                    </li>\
                    <li>\
                        <span class="emphasisRed">state</span> is\
                        <span class="emphasisBlue">javascript object</span>\
                            triggered by\
                            <span class="emphasisBlue">events</span> including'+ 
                            '<span class="emphasisBlue">user interactions</span>.\
                    </li>\
                </ul>\
            </blockquote>\
        </div>\
        <div class="clearBoth"></div>\
        <div>\
            <div style="margin-left:5px;width:400px;overflow:auto;" class="floatLeft">\
                <div style="margin-right:5px;">\
                    <img src="img/day08/compWillMount.png" style="width:383px;height:225px;">\
                    <br><sub style="margin-left:30px;">componentWillMount method</sub>\
                </div>\
                <div style="margin-right:30px;">\
                    <img src="img/day08/installAxios.png" style="width:340px;height:230px;">\
                    <br><sub style="margin-left:30px;">installing Axios</sub>\
                </div>\
            </div>\
            <article style="width:500px;overflow:auto;" class="floatLeft">\
                <ul>\
                    <caption style="font-size:25px;">Life-cycle Methods</caption>\
                    <li><span class="emphasisBlue">Component-will-mount</span></li>\
                        <ul style="list-style-type: square;margin-bottom:5px;">\
                            <li>it is executed when component is rendered.</li>\
                            <li>it can fetch data from the network.(duh)</li>\
                        </ul>\
                    <li><span class="emphasisBlue">Component state</span></li>\
                        <ul style="list-style-type: square">\
                            <caption>Rules when using state</caption>\
                            <li>Only use <span class="emphasisBlue">this.setState</span>\
                                    for <span class="emphasisBlue">updating state</span>.</li>\
                            <li><span class="emphasisBlue">Never</span>\
                                    modify property\
                                <span class="emphasisBlue">directly</span>.</li>\
                                <div style="margin-left:10px;">\
                                    ex)this.state = ...\
                                </div>\
                                <li><span class="emphasisBlue">Only</span>\
                                        use <span class="emphasisBlue">state</span>\
                                        with\
                                        <span class="emphasisBlue">class component</span>.</li>\
                        </ul>\
                        <ol>\
                            <caption>Orders</caption>\
                            <li>set up\
                                <span class="emphasisBlue">default settings</span>.</li>\
                            <li><span class="emphasisBlue">fetch data</span>,\
                                    tell component to <span class="emphasisBlue">update</span></li>\
                            <li><span class="emphasisBlue">reflect change</span>\
                                    in the screen</li>\
                        </ol>\
                </ul>\
                <ol>\
                    <caption style="font-size:25px;">How to fetch data</caption>\
                    <li>Install <span class="emphasisRed">Axios</span>\
                            <span class="emphasisBlue">in project directory</span>.</li>\
                    <li>Use <span class="emphasisRed">Axios</span> to make\
                            <span class="emphasisBlue">HTTP request</span>.</li>\
                    <li><span class="emphasisRed">Import</span> Axios\
                            in <span class="emphasisRed">the corresponding class component</span>.</li>\
                    <li>Use <span class="emphasisRed">HTTPS</span>\
                            for the parameter for\
                            <span class="emphasisRed">get function of axios</span>.</li>\
                </ol>\
            </article>\
        </div>',
    d09:
        '<h2>day09-Updating comp and advanced Usage</h2>\
        Continuous from previous chapter, we are gonna\
        <span class="emphasisBlue">display album data</span><br>\
        into\
        <span class="emphasisBlue"> our screen beautifully</span>.<br>\
        Since we are gonna write <span class="emphasisBlue">significant amount of code</span>\
        for <span class="emphasisBlue">styling</span><br>\
        we are gonna make <span class="emphasisBlue">separate comp</span>\
        to <span class="emphasisBlue">recycle those stylings</span>!\
        <div>\
            <div class="clearBoth"></div>\
            <div style="height:600px;" class="floatLeft">'+    
                '<div style="width:400px;height:600px;margin-bottom:5px;margin-left:5px;overflow:scroll;">\
                    <div style="margin-right:10px;">\
                        <img>\
                        <br><sub style="margin-left:25px;"></sub>\
                    </div>\
                    <div style="margin-bottom:10px;">\
                        <img src="img/day09/cardComp.png" style="width:338px;height:503px;">\
                        <br><sub style="margin-left:25px;">Card component</sub>\
                    </div>\
                    <div style="margin-bottom:10px;">\
                        <img src="img/day09/step1.png" style="width:380px;height:380px;">\
                        <br><sub style="margin-left:25px;">step 1</sub>\
                    </div>\
                    <div style="margin-bottom:10px;">\
                        <img src="./img/day09/step2.png" style="width:338px;height:503px;">\
                        <br><sub style="margin-left:25px;">step 2</sub>\
                    </div>\
                    <div style="margin-bottom:10px;margin-left:30px;">\
                        <img src="./img/day09/initalApplication.png" style="width:238px;height:377px;">\
                        <br><sub style="margin-left:25px;">initial Application</sub>\
                    </div>\
                    <div style="margin-bottom:10px;">\
                        <img src="./img/day09/step3.png" style="width:368px;height:439px;">\
                        <br><sub style="margin-left:25px;">step 3</sub>\
                    </div>\
                    <div style="margin-bottom:10px;">\
                        <img src="./img/day09/intermStep.png" style="width:380px;height:400px;">\
                        <br><sub style="margin-left:25px;">intermediate step</sub>\
                    </div>\
                    <div style="margin-bottom:10px;margin-left:30px;">\
                        <img src="./img/day09/initAplication2.png" style="width:234px;height:378px;">\
                        <br><sub style="margin-left:25px;">initial Application2</sub>\
                    </div>\
                    <div style="margin-bottom:10px;">\
                        <img src="./img/day09/destructRep.png" style="width:385px;height:249px;">\
                        <br><sub style="margin-left:25px;">destruct repetition of codes</sub>\
                    </div>\
                </div>\
            </div>\
            <article\
                style="border:1px solid black;width:400px;height:600px;margin-left:10px;margin-top:25px;overflow:auto;"\
                class="floatLeft">\
                <ol style="list-style-type: upper-roman;">\
                    <caption>Advanced tips, updating comp, and refelcting it</caption>\
                    <li>Make <span class="emphasisBlue">new comp</span>\
                        to <span class="emphasisBlue">recycle stylings</span>.</li>\
                        <div>\
                            ex) we made card and cardSection composition<br>\
                            to make our album display nicer and reusable.\
                        </div>\
                    <li>pass down <span class="emphasisBlue">comp as prop</span>\
                        in <span class="emphasisBlue">parent element</span>.</li>\
                        <div>\
                            <ol style="list-style-type: lower-roman;">\
                                <caption>How?</caption>\
                                <li>find <span class="emphasisBlue">comp</span>\
                                    you want to\
                                    <span class="emphasisBlue"> wrap</span>.</li>\
                                <li><span class="emphasisBlue">import them</span>\
                                    in\
                                    <span class="emphasisBlue"> parent comp</span>\
                                    you want to use.</li>\
                                    <div>\
                                        ex)we want albumDetails to use Card comp.\
                                        <span class="emphasisBlue">see step1 image</span>.\
                                    </div>\
                                <li>use <span class="emphasisBlue">props</span>\
                                    and\
                                    <span class="emphasisBlue">props.children</span>\
                                    to\
                                    <span class="emphasisBlue">\
                                        take any refernce for children comp</span>.</li>\
                                    <div>\
                                        ex)we use props.children to pass down anything<br>\
                                        in albumDetais.\
                                        <span class="emphasisBlue">see step2 image</span>.\
                                    </div>\
                                <li>Apply <span class="emphasisBlue">the same procedure</span>\
                                    to\
                                    <span class="emphasisBlue">\
                                        any comp to wrap other comp as child comp</span>.</li>\
                                    <div>\
                                        ex) cardSection include other comp so do the same with it.<br>\
                                        <span class="emphasisBlue">see step3 image</span>.\
                                    </div>\
                            </ol>\
                        </div>\
                    <li>Spend some time to position diff comps</li>\
                        <div>\
                            <ul style="list-style-type: square">\
                                <caption>Positioning tips in React-Native</caption>\
                                <li>use <span class="emphasisBlue">flexbox</span> technique.</li>\
                                <li><span class="emphasisBlue">flexDirection</span>\
                                    has <span class="emphasisBlue">two options</span>\
                                    for <span class="emphasisBlue">lining up the element</span>.</li>\
                                    <div>\
                                        <ul>\
                                            <li>&lsquo;row&rsquo;:line up\
                                                <span class="emphasisBlue">horizontally</span>.</li>\
                                            <li>&lsquo;column&rsquo;:line up\
                                                <span class="emphasisBlue">vertically</span>.</li>\
                                                <div>\
                                                    in react-native, this option is\
                                                    <span class="emphasisBlue"> default</span>.\
                                                </div>\
                                        </ul>\
                                    </div>\
                            </ul>\
                            <div style="height:10px;"></div>\
                            <ul style="list-style-type: circle">\
                                <caption>More justifyContent keywords</caption>\
                                <li>&lsquo;space-between&rsquo;:gives\
                                        <span class="emphasisBlue"> equal</span> space\
                                                <span class="emphasisBlue">between each comp</span></li>\
                                <li>&lsquo;space-around&rsquo;:gives\
                                    <span class="emphasisBlue">equal spaces</span>\
                                    in the <span class="emphasisBlue">start and the end also</span></li>\
                            </ul>'+                              
                        '</div>\
                    <li><span class="emphasisBlue">specify</span>\
                        styling used <span class="emphasisBlue">without recycling</span>.</li>\
                    <li>Don&rsquo;t forget to <span class="emphasisBlue">destructure\
                        <span class="emphasisBlue">overlapped style or reference</span>\
                        for <span class="emphasisBlue">clean code</span>.</li>\
                </ol>\
                <ul>\
                    <caption>How to use <span class="emphasisBlue">Image</span>\
                        tag in React-Native</caption>\
                    <li>it is simlar to <span class="emphasisBlue">Img tag</span> in\
                        <span class="emphasisBlue">HTML</span></li>\
                    <li>it has properties to fill in</li>\
                        <dl>\
                            <dt>1.source</dt>\
                            <dd>tells the <span class="emphasisBlue">source of image.(=src)</span></dd>\
                            <dt>2.style</dt>\
                            <dd>other stylings including width and height</dd>\
                        </dl>\
                    <li>If you want to'+ 
                            '<span class="emphasisBlue">only set up height or width</span>\
                                and \
                                <span class="emphasisBlue">flex the either one</span></li>\
                        <div style="margin-left:5px;">\
                            flex:1;<br>\
                            width or height:none;<br>\
                            the other one: anyNumber<br>\
                        </div>\
                </ul>\
            </article>\
        </div>',
    d10:
        '<h2>day10-making it scrollable.</h2>\
        When we have many items to show in the screen,<br>\
        we gotta make it scrollable to see all of them. The how?\
        <blockquote>\
            <ol>\
                <li>Choose element to have scroll function.</li>\
                <li>Import\
                    <span class="emphasisBlue">ScrollView element</span>\
                    in the selected element.\
                </li>\
                <li>wrap items within <span class="emphasisBlue">ScrollView element</span>.</li>\
            </ol>\
        </blockquote>\
        For example...\
        <div>\
            <div class="clearBoth"></div>\
            <div class="floatLeft">\
                <div>'+
                    '<img\
                        src="img/day10/how_to_scroll.png"\
                        style="width:395px;height:404px;"\
                    />\
                    <br><sub style="margin-left:30px;">using ScrollView</sub>\
                </div>\
            </div>\
            <article class="floatLeft">\
                In this example, we want to make<br>\
                album information scrollable.<br>\
                so we choose albumList to have ScrollView<br>\
                and replace it with View tag.\
            </article>\
            <div class="clearBoth"></div>\
        </div>\
        <div>\
            Whenever using ScrollView in ReactNative...\
            <blockquote>\
                gotta have <span class="emphasisBlue">flex:1</span> in styling\
                for <span class="emphasisBlue">parent element</span>.\
            </blockquote>\
        </div>',
    d11:
        '<h2>day11-Button and User Input</h2>\
        we use buttons in order to...\
        <blockquote>\
            <ul>\
                <li>allow <span class="emphasisBlue">user interaction with the screen</span>.</li>\
                <li>call back <span class="emphasisBlue">action event when triggered</span>.</li>\
            </ul>\
        </blockquote>\
        React-native has 4 button components with different functions.<br>\
        With these four, you can design your button.\
        <blockquote>\
            <dl>\
                <dt>TouchableHighlight:</dt>\
                <dd>it <span class="emphasisBlue">changes its color</span>\
                        when\
                        <span class="emphasisBlue"> touched</span>.\
                        Very \
                        <span class="emphasisBlue">versatile</span></dd>\
                <dt>TouchableNativeFeedback:</dt>\
                <dd>may consider using this in android</dd>\
                <dt>TouchableOpacity:</dt>\
                <dd>used to <span class="emphasisBlue">give feedback</span> when pressing.</dd>\
                <dt>TouchableWithoutFeedback:</dt>\
                <dd>self explanatory</dd>\
            </dl>\
        </blockquote>\
        For last thing, to accept your interaction, we add\
        <span class="emphasisBlue">action event</span> on the botton.<br>\
        for this case,\
        <span class="emphasisBlue">onPress</span> is by default event for button.\
        For example...\
        <div>\
            <div class="clearBoth"></div>\
            <div class="floatLeft">\
                <div>\
                    <img\
                        src="img/day11/onPress.png"\
                        style="width:350px;height:501px;"\
                    >\
                    <br><sub style="margin-left:10px;">using props to button and add event</sub>\
                </div>\
            </div>\
            <article style="height:501px;overflow:auto;" class="floatLeft">\
                In this case, we use TouchableOpacity<br>\
                for the button. and want to execute<br>\
                any function taken as props.<br>\
                in order to make sure it is<br>\
                reusable.\
                <ul>\
                    <caption>new Styling keyword</caption>\
                    <li><span class="emphasisRed">alignSelf</span></li>\
                        <div>\
                            <span class="emphasisBlue">child element</span>\
                            positions\
                            <span class="emphasisBlue">itself</span><br>\
                            within the parent element.\
                        </div>\
                    <li><span class="emphasisRed">flex</span></li>\
                        <div>\
                            if using 1 as option,<br>\
                            it stretches the width of screen<br>\
                            with <span class="emphasisBlue">max</span>.\
                        </div>\
                    <li><span class="emphasisRed">borderRadius</span></li>\
                        <div>\
                            it gives nice rounded edge in the border.\
                        </div>\
                    <li><span class="emphasisRed">padding</span></li>\
                        <div>\
                            it gives space between item and border.\
                        </div>\
                </ul>\
            </article>\
            <div class="clearBoth"></div>\
        </div>',
    d12:
        '<h2>day12-Linking between Apps or Web</h2>\
        In order to move between the app or web,we use <span class="emphasisRed">Linking</span> API.\
        <blockquote>\
            <ol>\
                <li>import Linking from react-native library.</li>\
                <li>Use appropriate member functions for your app.</li>\
            </ol>\
        </blockquote>\
        <ul style="list-style-type: none">\
            <caption>Useful member functions to use</caption>\
            <li>openURL(uri)</li>\
                <ul>\
                    <li><span class="emphasisBlue">\
                        opens up url</span>\
                            give in the parameter.</li>\
                </ul>\
            <li>canOpenURL(url)</li>\
                <ul>\
                    <li><span class="emphasisBlue">determine</span>\
                            whether app can open an url\
                        given in parameter.\
                    </li>\
                </ul>\
            <li>getInitialURL(url)</li>\
                <ul>\
                    <li>if outside url opend App,</li>\
                    <li>it returns that opening url.</li>\
                </ul>\
            <li>addEventListener(type, handler)</li>\
                <ul>\
                    <li>providing handler,</li>\
                    <li>listens to url type event.</li>\
                </ul>\
            <li>removeEventListener(type, handler)</li>\
                <ul>\
                    <li>providing handler,</li>\
                    <li>removes url type event</li>\
                </ul>\
        </ul>',
    d13:
        '<h2>day13-Setting up Firebase</h2>\
        <blockquote>\
            <span class="emphasisRed">authentication</span>\
            is a procedure that filters users.\
        </blockquote>\
        For React-Native or React Application, we use\
            <span class="emphasisRed">Google Firebase</span>\
        for online database.<br>\
        <aside>\
            <ul>\
                <caption>useful tips</caption>\
                <li>How to deal with multiple import statements</li>\
                    <article>\
                        <div style="height:565px;">\
                            <div class="clearBoth"></div>\
                            <div style="margin-right:10px;" class="floatLeft">\
                                <img\
                                    src="img/day13/tip1_3.png"\
                                    style="width:310px;height:550px;"\
                                >\
                                <br><sub class="imgSub">export {compName}</sub>\
                            </div>\
                            <div style="width:350px;height:500px" class="floatLeft">\
                                <div class="clearBoth"></div>\
                                <div style="margin-bottom:10px;margin-top:10px;">\
                                    <img\
                                        src="img/day13/tip1_2.png"\
                                        style="width:340px;height:310px;"\
                                        >\
                                    <br><sub class="imgSub">index.js for each dir in src</sub>\
                                </div>\
                                <div>\
                                    <img\
                                        src="img/day13/tip1_1.png"\
                                        style="width:276px;height:165px;"\
                                    >\
                                    <br><sub class="imgSub">export * from &lsquo;dir&rsquo;</sub>\
                                </div>\
                                <div class="clearBoth"></div>\
                            </div>\
                            <div class="clearBoth"></div>\
                        </div>\
                        <article style="margin-top:25px;">\
                            <ol>\
                                <li class="interval5">create\
                                        <span class="emphasisBlue">index.js for sub dir</span>\
                                        in src</li>\
                                <li class="interval5">\
                                    use'+ 
                                    '<span class="emphasisBlue">\
                                        &ldquo;export * from &lsquo;dir&rsquo;&rdquo;\
                                    </span>\
                                    for each component in index.js\
                                </li>\
                                <li class="interval5">\
                                    use\
                                    <span class="emphasisBlue">\
                                        &ldquo;export { nameOfComp }&rdquo;\
                                    </span>\
                                    in each component within that dir\
                                </li>\
                                <li class="interval5">import\
                                        <span class="emphasisBlue">index.js in that sub dir</span>\
                                </li>\
                                <li>Now you are ready to use multple component with single line.</li>\
                            </ol>\
                        </article>\
                    </article>\
                <li>How to set up Firebase authentication</li>\
                    <article>\
                        <div class="clearBoth"></div>\
                        <div style="overflow:auto;height:434px;margin-right:10px;">\
                            <div style="margin-bottom:10px;">\
                                <img\
                                    src="./img/day13/tip2_1.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">go to console</sub>\
                            </div>\
                            <div style="margin-bottom:10px;">\
                                <img\
                                    src="./img/day13/tip2_2.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">add new project</sub>\
                            </div>\
                            <div style="margin-bottom:10px;">\
                                <img\
                                    src="./img/day13/tip2_3.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">create new project</sub>\
                            </div>\
                            <div style="margin-bottom:10px;">\
                                <img\
                                    src="./img/day13/tip2_4.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">authentication</sub>\
                            </div>\
                            <div style="margin-bottom:10px;">\
                                <img\
                                    src="./img/day13/tip2_5.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">make sign up method</sub>\
                            </div>\
                            <div style="margin-bottom:10px;">\
                                <img\
                                    src="./img/day13/tip2_6.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">choose and enable them</sub>\
                            </div>\
                        </div>\
                        <article>\
                            <ol>\
                                <li class="interval5">\
                                    use <span class="emphasisBlue">Google account</span>\
                                    for\
                                    <span class="emphasisBlue">firebase</span>.\
                                </li>\
                                <li class="interval5">click &ldquo;go to console&rdquo;</li>\
                                <li class="interval5">click &ldquo;add new project&rdquo;</li>\
                                <li class="interval5">click &ldquo;create new project&rdquo;</li>\
                                <li class="interval5">click &ldquo;authentication&rdquo;</li>\
                                <li class="interval5">click &ldquo;make sign up method&rdquo;</li>\
                                <li>choose your method and enable them.</li>\
                            </ol>\
                        </article>\
                        <div class="clearBoth"></div>\
                    </article>\
                <li>Use Firebase client</li>\
                    <article>\
                        <div style="height:434px;overflow:auto;">\
                            <div class="interval5">\
                                <img\
                                    src="./img/day13/tip3_1.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">click web setup</sub>\
                            </div>\
                            <div class="interval5">\
                                <img\
                                    src="./img/day13/tip3_2.png"\
                                    style="width:730px;height:424px;"\
                                />\
                                <br><sub class="imgSub">copy contents within brackets</sub>\
                            </div>\
                            <div class="interval5">\
                                <img\
                                    src="./img/day13/tip3_3.png"\
                                    style="width:334px;height:401px;"\
                                />\
                                <br><sub class="imgSub">implementing into your code</sub>\
                            </div>\
                        </div>\
                        <article>\
                            <ol>\
                                <li class="interval5">install firebase\
                                        <span class="emphasisBlue">in your project directory</span>.</li>\
                                    <blockquote>\
                                        npm install --save firebase\
                                    </blockquote>\
                                <li class="interval5">import firebase in your app.</li>\
                                <li class="interval5">click &ldquo;web setup&rdquo;</li>\
                                <li class="interval5">copy the contents within the brackets</li>\
                                <li class="interval5">Implement it on your code.</li>\
                            </ol>\
                        </article>\
                    </article>\
            </ul>\
        </aside>',
    d14:
        '<h2>day14-How to handle regular user input</h2>\
        In order to see how to handle user input,\
        Let&rsquo; make an Login app.<br>\
        Since we have gone through the important steps of making apps, we will focus on<br>\
        getting and handling the input right<Br>\
        <blockquote>\
            <span class="emphasisRed">TextInput</span> is a\
                react-native input for user input that takes as text.\
            <ul>\
                <caption>Very Tricky!</caption>\
                <li class="interval5">\
                    <span class="emphasisBlue">No default set up</span>\
                        for\
                        <span class="emphasisBlue"> width and height</span></li>\
                <li class="interval5">\
                    <span class="emphasisBlue">No styling</span>\
                    by default.</li>\
                <li class="interval5">\
                    React-Native Input has to be styled\
                        and set up manually from the scratch.</li>\
            </ul>\
        </blockquote>\
        <div>\
            <div class="clearBoth"></div>\
            <div class="floatLeft">\
                <div class="interval5">\
                    <img\
                        src="./img/day14/howReactDealsINput.png"\
                        style="width:478px;height:605px;"\
                    >\
                    <br><sub class="imgSub">\
                        How React deals with Text Input\
                    </sub>\
                </div>\
            </div>\
            <article class="floatLeft">\
                <h4 class="centerText">\
                    How to get access to the user text input\
                </h4>\
                Unlike regular JavaScript,React is totally different.<br>\
                <ol style="list-style-type: lower-latin">\
                    <caption>How text input is proceesed in React</caption>\
                    <li class="interval5">set up state</li>\
                    <li class="interval5">reset items in the state as empty string</li>\
                    <li class="interval5">update every change in TextInput to state</li>\
                    <li class="interval5">every update rerenders the component.</li>\
                    <li class="interval5">this procedure repeats</li>\
                </ol> \
            </article>\
            <div class="clearBoth"></div>\
        </div>\
        <div>\
            <ul>\
                <caption>\
                    What does\
                    <span class="emphasisBlue">flex</span> acutally do?\
                </caption>\
                <li>\
                    Available Option:\
                    <span class="emphasisBlue">positive numbers</span>\
                </li>\
                <li>\
                    number in flex signifies\
                    <span class="emphasisBlue">proportion</span>.\
                </li>\
            </ul>\
            <article>\
                For example...\
                <div class="clearBoth"></div>\
                <div class="floatLeft">\
                    <img\
                        src="./img/day14/flexEx.png"\
                        style="width:274px;height:442px;"\
                    >\
                    <br><sub class="imgSub">\
                        proportion by flex\
                    </sub>\
                </div>\
                <article class="floatLeft">\
                    Inside of the Input component,<br>\
                    There are TextInput and Text elements.<br>\
                    Based on the img, TextInput has\
                        <span class="emphasisBlue">2</span> on flex value.<br>\
                    while Text has\
                    <span class="emphasisBlue">1</span>\
                        for its value. It signifies that<br>\
                    TextInput takes \
                    <span class="emphasisBlue">2/3</span>\
                        of the parent component and<br>\
                    Text takes\
                    <span class="emphasisBlue">1/3</span>\
                        of the parent component.\
                </article>\
                <div class="clearBoth"></div>\
            </article>\
        </div>\
        <div>\
            <h4 class="centerText">\
                few minor tips\
            </h4>\
            <div style="margin-left:100px;margin-right:100px;">\
                <img\
                    src="./img/day14/minorTips.png"\
                    style="width:307px;height:179px;"\
                >\
                <br><sub class="imgSub">\
                    implementation\
                </sub>\
            </div>\
            <ul>\
                <li>How to disable autocorrection in mobile devices</li>\
                    <article class="indented">\
                        use this as property\
                        <blockquote>\
                            autoCorrrect={false};\
                        </blockquote>\
                    </article>\
                <li>How to set up subText as placeholder</li>\
                    <article class="indented">\
                        use this as property\
                        <blockquote>\
                            placeholder={...};\
                        </blockquote>\
                    </article>\
            </ul>\
        </div>',
    d15:
        '<h2>day15-How to handle password input</h2>\
        Continuing from the previous chapter, we have gone through ID input.<br>\
        Let&rsquo;s take a look at how to take password input.\
        <div class="interval5">\
            <div class="clearBoth"></div>\
            <div style="margin-right:100px;margin-left:100px;float:left;">\
                <img\
                    src="./img/day15/before.png"\
                    style="width:180px;height:335px;"\
                >\
                <br><sub class="imgSub">\
                    before\
                </sub>\
            </div>\
            <div class="floatLeft">\
                <img\
                    src="./img/day15/after.png"\
                    style="width:180px;height:335px;"\
                >\
                <br><sub class="imgSub">\
                    after\
                </sub>\
            </div>\
            <div class="clearBoth"></div>\
        </div>\
        <div>\
            <span style="margin-left:15px;">\
                How to convert password input displayed as &ldquo;*&rdquo; on the screen?<br>\
            </span>\
            Add this property in your input component.\
            <blockquote>\
                <span class="emphasisRed">secureTextEntry</span>\
                determines whether the input should be secured as not.\
            </blockquote>\
            <div>\
                <div class="clearBoth"></div>\
                <div style="margin-right:50px;margin-left:50px;float:left;">\
                    <img\
                        src="./img/day15/how_1.png"\
                        style="width:324px;height:261px;"\
                    >\
                    <br><sub class="imgSub">\
                        adding prop\
                    </sub>\
                </div>\
                <div class="floatLeft">\
                    <img\
                        src="./img/day15/how_2.png"\
                        style="width:300px;height:370px;"\
                    >\
                    <br><sub class="imgSub">\
                        inputing prop\
                    </sub> \
                </div>\
                <div class="clearBoth"></div>\
            </div>\
            <div>\
                <ul>\
                    <caption>Good tip</caption>\
                    <li>When passing boolean in the props,</li>\
                    <li>If it is true, do not specify.</li>\
                </ul>\
            </div>\
        </div>',
    d16:
        '<h2>day16-How to validate user input and error handling</h2>\
        <ol>\
            <caption>prerequisites</caption>\
            <li>Do not forget to add test user in the firebase managment.</li>\
            <li>import firebase in the login component.</li>\
            <li>use following methods with the button\
                <span class="emphasisBlue">using its onPress property</span></li>\
                <blockquote>\
                    <span class="emphasisBlue">\
                        firebase.auth().signInWithEmailAndPassword(email, password);\
                    </span>\
                </blockquote>\
        </ol>\
        <div>\
            <h4>If user input is wrong?</h4>\
            We catch the error and call back the function!\
            <article>\
                <div class="clearBoth"></div>\
                <div class="floatLeft">\
                    <div style="padding-top:70px;padding-right:5px;padding-left:5px;padding-bottom:5px;">\
                        <img\
                            src="./img/day16/errorHandling.png"\
                            style="width:380px;height:225;"\
                        >\
                        <br><sub class="imgSub">\
                            Error Handling\
                        </sub>\
                    </div>\
                </div>\
                <article class="floatLeft">\
                    <ol>\
                        <caption>step by step...</caption>\
                        <li>Make a plan for login steps.</li>\
                            <ol>\
                                <caption>Login Steps</caption>\
                                <li>If both email and password right, login.</li>\
                                <li>if both email and password are wrong</li>\
                                <li>make new email and paassword account</li>\
                                <li>make a new login try.</li>\
                                <li>if it is still wrong, no login.</li>\
                                <li>if right, login.</li>\
                            </ol>\
                        <li>add error in the component state</li>\
                        <li>use\
                            <span class="emphasisBlue">catch()</span>\
                            to catch error.\
                        </li>\
                        <li>Make sure to update error state with catch method.</li>\
                    </ol>\
                </article>\
                <div class="clearBoth"></div>\
            </article>\
        </div>\
        <aside>\
            <ul>\
                <caption>tips</caption>\
                <li>In order to let user know it is loading..</li>\
                    <article>\
                        <h4>Make reusable spinner component.</h4>\
                        <div class="clearBoth"></div>\
                        <div class="floatLeft">\
                            <div style="padding-top:5px;padding-left:5px;padding-right:5px;">\
                                <img\
                                    src="./img/day16/Spinner.png"\
                                    style="width:280px;height:306px;"\
                                >\
                                <br><sub class="imgSub">\
                                    Spinner\
                                </sub>\
                            </div>\
                        </div>\
                        <article class="floatLeft">\
                            <ol>\
                                <li class="interval5">import\
                                    <span class="emphasisBlue">ActivityIndicator</span>\
                                    <div class="indented">\
                                        <dl>\
                                            <caption>Related properties</caption>\
                                            <dt><span class="emphasisBlue">size</span></dt>\
                                                <dd class="interval5">\
                                                    it determines the size of indicator.\
                                                    <ul>\
                                                        <caption>Options</caption>\
                                                        <li>&lsquo;large&rsquo;</li>\
                                                        <li>&lsquo;small&rsquo;</li>\
                                                    </ul>\
                                                </dd>\
                                                <ul>\
                                                    <caption>Good tips</caption>\
                                                    <li>try \
                                                        <span class="emphasisBlue">\
                                                            size={size || &lsquo;large&rsquo;}\
                                                        </span>\
                                                        to make &lsquo;large&rsquo; as default size.\
                                                    </li>\
                                                        <div class="indented">\
                                                            Can be applied to other props also.\
                                                        </div>\
                                                </ul>\
                                            <dt><span class="emphasisBlue">color</span></dt>\
                                                <dd class="interval5">\
                                                    it indicates the color of indicator when displayed\
                                                </dd>\
                                            <dt><span class="emphasisBlue">animating</span></dt>\
                                                <dd class="interval5">\
                                                    it returns boolean value to determine to show or not.\
                                                </dd>\
                                        </dl>\
                                    </div>\
                                </li>\
                                <li>Use it under conditional component usage.</li>\
                            </ol>\
                        </article>\
                        <div class="clearBoth"></div>\
                    </article>\
                <li></li>\
            </ul>\
        </aside>',
    d17:
        '<h2>day17-Conditional rendoring</h2>\
        We want to show a certain component only visible for specific condition.<br>\
        In order to do so, there are steps for conditional rendering.\
        <div>\
            <div style="width:400px;height:270px;overflow-x:auto;padding-bottom:10px;">\
                <div class="clearBoth"></div>\
                <div style="padding-right:10px;float:left;">\
                    <img\
                        src="./img/day17/step1.png"\
                        style="width:260px;height:250px;"\
                    >\
                    <br><sub class="imgSub">\
                        adding new state and helper functions.\
                    </sub>\
                </div>\
                <div style="padding-right:10px;float:left;">\
                    <img\
                        src="./img/day17/conditional.png"\
                        style="width:370px;height:200px;"\
                    >\
                    <br><sub class="imgSub">\
                        conditional rendering\
                    </sub>\
                </div>\
                <div style="padding-right:10px;float:left;">\
                    <img\
                        src="./img/day17/application.png"\
                        style="width:380px;height:210px;"\
                    >\
                    <br><sub class="imgSub">\
                        in display code\
                    </sub>\
                </div>\
                <div class="clearBoth"></div>\
            </div>\
            <article>\
                <h4>Step by step</h4>\
                <ol>\
                    <li class="interval5">\
                        Make a <span class="emphasisBlue">new state</span>\
                        <div class="indented">\
                            Whenever you need to render, make a way with state.<br>\
                            In this case, we added loading in the state<br>\
                            in order to render spinner.\
                        </div>\
                    </li>\
                    <li class="interval5">\
                        When button is <span class="emphasisBlue">clicked</span>,\
                        <span class="emphasisBlue">update new state</span>\
                        <div class="indented">\
                            When button is clicked, we modify\
                            loading value in state back and forth<br>\
                            depending on the situation.\
                        </div>\
                    </li>\
                    <li class="interval5">Make'+ 
                        '<span class="emphasisBlue">a helper function</span>\
                        that renders different component.\
                        based on that state.\
                        <div class="indented">\
                            It is always better to make helper function\
                            and clear your code instead of cluttering.\
                        </div>\
                    </li>\
                    <li class="interval5">Make <span class="emphasisBlue">\
                        a condition to roll back that state</span>.\
                        <div class="indented">\
                            Always make a code that roll back\
                            the change made by user input.\
                        </div>\
                    </li>\
                    <li class="interval5"><span class="emphasisBlue">Repeat this loop</span>.\
                        <div class="indented">\
                            Make this loop and you can easily\
                            run the user validation.\
                        </div>\
                    </li>\
                </ol>\
            </article>\
        </div>\
        <aside>\
            <h4>Tips</h4>\
            <ul>\
                <li>It is always to make helper function.</li>\
                <li>Whenever changes happen, modify state using setState</li>\
                <li>In order to process true case, use <span class="emphasisBlue">then()</span></li>\
            </ul>\
        </aside>',
    d18:
        '<h2>day18-handling authentication events</h2>\
        Well we want to know whether user is loggin or not.<br>\
        In order to do so, we will make use of whatever we have learned so far.<br>\
        <span class="emphasisBlue">state and helper functions</span>\
        can do variety of works.<br>\
        <div>\
            <div class="clearBoth"></div>\
            <div class="floatLeft">\
                <h4>Coding Procedure</h4>\
                <div id="codingProc" style="padding:5px;">\
                    <img style="width:320px;height:450px;">\
                    <br><sub class="imgSub">\
                        <span></span>\
                    </sub>\
                </div>\
                <div>\
                    <div class="clearBoth"></div>\
                    <button\
                        id="procBtn1"\
                        style="float:left;padding:5px;font-size:15px;color:black;font-weight:bold;margin:20px;">\
                        Prev\
                    </button>\
                    <button\
                        id="procBtn2"\
                        style="float:left;padding:5px;font-size:15px;color:black;font-weight:bold;margin:20px;">\
                        Next\
                    </button>\
                    <div class="clearBoth"></div>\
                </div>\
            </div>\
            <div class="floatLeft">\
                <h4>Effects</h4>\
                <div id="effect" style="padding:5px;">\
                    <img style="width:310px;height:360px;">\
                    <br><sub class="imgSub">\
                        <span></span>\
                    </sub>\
                </div>\
                <div>\
                    <div class="clearBoth"></div>\
                    <button\
                        id="effectBtn1"\
                        style="float:left;padding:5px;font-size:15px;color:black;font-weight:bold;margin:20px;">\
                        Prev\
                    </button>\
                    <button\
                        id="effectBtn2"\
                        style="float:left;padding:5px;font-size:15px;color:black;font-weight:bold;margin:20px;">\
                        Next\
                    </button>\
                    <div class="clearBoth"></div>\
                </div>\
            </div>\
            <div class="clearBoth"></div>\
            <article>\
                <ol>\
                    <li>Where firebase authentication is happening,..</li>\
                    <li>Use <span class="emphasisRed">onAuthStateChanged</span></li>\
                    <li>Make <span class="emphasisBlue">helper functions</span>\
                        that would render <span class="emphasisRed">conditionally</span>.</li>\
                    <li>Make use of three states this time</li>\
                        <blockquote>\
                            true false null\
                            <div>\
                                <ul>\
                                    <li><sub>true</sub>=<sub>user is logged in</sub></li>\
                                    <li><sub>false</sub>=<sub>user logged out</sub></li>\
                                    <li><sub>null</sub>=<sub>we do not know sure</sub></li>\
                                </ul>\
                            </div>\
                        </blockquote>\
                    <li>When logged in, logStatus == true</li>\
                    <li>When logged out, logStatus == false</li>\
                    <li>When logging out, use\
                        <span class="emphasisBlue">\
                            firebase.auth().signOut();\
                        </span>\
                    </li>\
                    <li>In order to indicate it is loading, show Spinner when loading.</li>\
                </ol>\
            </article>\
        </div>',
    d19:
        '<h2>day19-Introduction to Redux</h2>\
        <div>\
            Now state is only local to the class we create.<br>\
            However if the state is global to every component in the app?<br>\
            That is why we use <span class="emphasisBlue">Redux</span><br>\
        </div>\
        <article>\
            <div style="margin-left:auto;margin-right:auto;padding-bottom:10px;width:50%;padding-top:10px;">\
                <img\
                    src="./img/day18/Redux_Img1.png"\
                    style="width:400px;height:200px;"\
                >\
                <br><sub class="imgSub">\
                    How redux works\
                </sub>\
            </div>\
            <div>\
                In order to make it verbally easier to understand..\
                <ul>\
                    <li class="interval5">action\
                        <blockquote>\
                            a plain javascript object that tells reducer what to do\
                            <ul>\
                                <li>It must have\
                                    <span class="emphasisBlue">type</span>\
                                    Property.\
                                </li>\
                                <li>it is always string.</li>\
                                <li>its whole purpose is to tell what to do.</li>\
                            </ul>\
                        </blockquote>\
                    </li>\
                    <li class="interval5">reducer\
                        <blockquote>\
                            a function that creates some amount of code or data.\
                            <ul>\
                                <li>It takes two parameter.\
                                    <span class="emphasisBlue">state and action</span>.</li>\
                            </ul>\
                        </blockquote></li>\
                    <li class="interval5">state\
                        <blockquote>\
                            an application data.\
                        </blockquote></li>\
                    <li class="interval5">store\
                        <blockquote>\
                            storage for states and reducers.\
                        </blockquote></li>\
                </ul>\
            </div>\
        </article>',
    d20:
        '<h2>day20-good Redux conventions</h2>\
        <div>\
            There are some must rule for redux.\
        </div>\
        <article>\
            <ul>\
                <caption>Don&rsquo;t&rsquo;s</caption>\
                <li>Do not change state in Redux directly.</li>\
            </ul>\
            <ul>\
                <caption>Do&rsquo;s</caption>\
                <li>Return a new state.</li>\
            </ul>\
            <ul>\
                <caption>Reason</caption>\
                <li></li>\
            </ul>\
        </article>',
    d21:
        '<h2>day21-Actual Redux practice in App</h2>\
        <div>\
            Short word in quick.\
            <ol>\
                <li class="interval5">install <span class="emphasisBlue">Redux</span>\
                        within the project directory.\
                    <blockquote>\
                        npm install --save redux react-redux\
                    </blockquote>\
                </li>\
                <li class="interval5">import two component from\
                        <span class="emphasisBlue">reduct and react-redux</span>\
                        in your App.js.\
                        <blockquote>\
                            Provider from react-redux and createStore from redux.\
                        </blockquote>\
                </li>\
                <li class="interval5">create  \
                    <span class="emphasisBlue">reducers and actions</span>\
                    files to put into the store within its directories.\
                </li>\
                <li class="interval5">create'  
                    +'<span class="emphasisBlue">index.js</span>\
                    within reducers directory.\
                </li>\
                <li class="interval5">design  \
                    <span class="emphasisBlue">reducers and following states</span>.\
                </li>\
                <li class="interval5">pull state generated from reducers   \
                    <span class="emphasisBlue">Within the state you choose</span>.\
                </li>\
            </ol>\
        </div>\
        <div>\
            <div id="imgBox" class="centerImg">\
                <img\
                    style="width:400px;height:400px;"\
                ><br><sub class="imgSub">\
                \
                </sub>\
                <div>\
                    <div class="clearBoth"></div>\
                    <button id="prevBtn" class="imgBtn">Previous</button>\
                    <button id="nxtBtn" class="imgBtn">Next</button>\
                    <div class="clearBoth"></div>\
                </div>\
            </div>\
        </div>\
        <div>\
            <ul>\
                <li class="interval5">\
                    <span class="emphasisRed">react-redux</span>:library helping\
                    <span class="emphasisBlue">connnect</span> react and redux.\
                </li>\
                <li class="interval5">\
                    <span class="emphasisRed">combineReducers</span>: redux component that\
                    <span class="emphasisBlue">help</span> multiple reducers work together.\
                </li>\
                <li class="interval5">\
                    <span class="emphasisRed">Provider</span> can only include'+ 
                    '<span class="emphasisBlue">single</span> child component.\
                    <div class="indented">\
                        Make use of <span class="emphasisBlue">View</span>\
                            Tag to wrap multiple components.\
                    </div>\
                </li>\
                <li class="interval5">\
                    <span class="emphasisRed">Collect</span> all the reducers in'+ 
                    '<span class="emphasisBlue">one file</span>.\
                </li>\
                <li class="interval5">\
                    In terms of <span class="emphasisRed">reducer design</span>\
                    <div class="indented">\
                        <ul>\
                            <caption>Types of reducers</caption>\
                            <li class="interval5">Library Reducer\
                                <div class="indented">\
                                    If dealing with list of items, use this type.\
                                </div>\
                            </li>\
                            <li class="interval5">Selector Reducer\
                                <div class="indented">\
                                    If wanna keep track of picked item, use this type.\
                                </div>\
                            </li>\
                        </ul>\
                    </div>\
                </li>\
                <li class="interval5">\
                    <h4>How to pull state from store within class based component</h4>\
                    <div style="padding-top:5px;padding-bottom:5px;margin-left:20px;">\
                        <img\
                            src="img/day20/connect.png"\
                            style="width:400px;height:400px;"\
                        >\
                        <br><sub class="imgSub">\
                            How Connect function helps.\
                        </sub>\
                    </div>\
                    <div>\
                        You need <span class="emphasisRed">Connect</span>,\
                            a <span class="emphasisBlue">helper function<br>\
                                in React-Redux library</span>\
                            that lets <span class="emphasisRed">component</span> pulls state from<br>\
                            <span class="emphasisBlue">reducers</span>.\
                        <ul>\
                            <li class="interval5">\
                                use <span class="emphasisRed">connect()(Component_name)</span>\
                                    in <span class="emphasisBlue">export statement</span>.\
                            </li>\
                            <li class="interval5">\
                                In the first argument, write function.\
                            </li>\
                            <li class="interval5">\
                                <span class="emphasisBlue">The state returned from the first argument</span>\
                                    becomes<br>\
                                the <span class="emphasisBlue">props</span>.\
                            </li>\
                        </ul>\
                    </div>\
                </li>\
            </ul>\
        </div>',
    d22:
        ''
};