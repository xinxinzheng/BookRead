requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'static',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery:"js/jquery-3.1.1.min",
        react:"js/react",
        require:'js/require',
        reactdom:"js/react-dom",
        reactrouter:"js/ReactRouter.min",
        browser:"js/browser.min",
        jsx:"js/jsx",
        css:'js/css',
        JSXTransformer: 'js/JSXTransformer',
        text: 'js/text',
        index:'jsx/index',
        header:"jsx/common/header",
        book:"jsx/common/book",
        calendar:"jsx/common/calendar",
        commonlist:"jsx/common/common.list",
        footer:"jsx/common/footer",
        content:"jsx/common/content",
        sidemenu:"jsx/common/sidemenu",
        link:'jsx/common/link',
        robot:'jsx/css/robot',
        tag:'jsx/css/tag',
        btn:'jsx/css/btn',

        BasesCanvas:'jsx/canvas/bases-canvas',
        drawShape:'jsx/canvas/shape-canvas',
        styleCanvas:'jsx/canvas/style-canvas',
        textCanvas:'jsx/canvas/text-canvas',
        imgCanvas:'jsx/canvas/img-canvas',
        transformCanvas:'jsx/canvas/transform-canvas',
        compositionCanvas:'jsx/canvas/composition-canvas',

        loading:"jsx/animation/loadding",
        happy:"jsx/animation/happy",

        robotcss:'css/css/robot',
        tagcss:'css/css/tag',
        btncss:'css/css/btn',
        loadding:'css/animation/loadding',
        happycss:'css/animation/happy'
    },
    map: {
      '*': {
        'css': 'js/css'
      } 
    },
    shim : {
        jsx: {
            deps: [ 'react', 'text' ]
        }
    },
    jsx: {
         fileExtension: '.js',
         harmony: true,
         stripTypes: true
    }
});

// Start the main app logic.
requirejs(['jsx!index'],function() {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});