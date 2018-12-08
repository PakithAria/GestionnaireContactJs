var mainVue = function ()
{
    this.vue="main";

    this.elements =
    {
        main: undefined,

        form: undefined,
        nameInput: undefined,
    
        submit: undefined,
    
        render: undefined,
        nameParagraphe: undefined,

    };

    this.model ={
        name: '',
    };

};
mainVue.prototype.init=function()
{
    this.elements.main=document.querySelector('[data-vue="'+this.vue+'"]');

    this.elements.form=this.elements.main.querySelector('[data-form="'+this.vue+'"]');

    this.elements.nameInput=this.elements.form.querySelector('[data-model="name"]');

    this.elements.submit=this.elements.form.querySelector('[data-action="submit"]');

    this.elements.render=this.elements.main.querySelector('[data-render="'+this.vue+'"]');

    this.elements.nameParagraphe=this.elements.render.querySelector('[data-model="name"]');

    this.registerAction();

};

mainVue.prototype.registerAction=function(){
    var self=this;
    this.elements.submit.addEventListener('click',function(){
        self.submit() });
};

mainVue.prototype.submit=function(){
    alert();
};

var m=new mainVue();
m.init();