var mainVue = function ()
{
    this.vue="main";

    this.elements =
    {
        main: undefined,

        form: undefined,
        nameInput: undefined,
    
        firstNameInput: undefined,

        submit: undefined,
    
        render: undefined,

        nameParagraphe: undefined,

        firstNameParagraphe: undefined,

    };

};
mainVue.prototype.init=function()
{
    this.elements.main=document.querySelector('[data-vue="'+this.vue+'"]');

    this.elements.form=this.elements.main.querySelector('[data-form="'+this.vue+'"]');

    this.elements.nameInput=this.elements.form.querySelector('[data-model="name"]');

    this.elements.firstNameInput=this.elements.form.querySelector('[data-model="firstname"]');

    this.elements.submit=this.elements.form.querySelector('[data-action="submit"]');

    this.elements.render=this.elements.main.querySelector('[data-render="'+this.vue+'"]');

    this.elements.nameParagraphe=this.elements.render.querySelector('[data-model="name"]');

    this.elements.firstNameParagraphe=this.elements.render.querySelector('[data-model="firstname"]');

    this.registerAction();
    

};

mainVue.prototype.registerAction=function(){
    var self=this;
    this.elements.submit.addEventListener('click',function(){
        self.submit();
    });
    
    this.elements.firstNameInput.addEventListener('keydown',function(){
            self.write(); 
    });
};

mainVue.prototype.submit=function(){
    var self =this;
    self.elements.nameParagraphe.innerHTML=self.elements.nameInput.value; 
};


mainVue.prototype.write=function(){
    var self =this;
    self.elements.firstNameParagraphe.innerHTML=self.elements.firstNameInput.value; 
};
var m=new mainVue();
m.init();