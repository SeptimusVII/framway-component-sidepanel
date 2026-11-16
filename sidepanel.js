module.exports = function(){
    let Sidepanel = Object.getPrototypeOf(fw).Sidepanel = class Sidepanel extends fw.Modal{
        static {
            this.debug = false;
            this.createdAt  = "3.0.0";
            this.lastUpdate = "3.0.0";
            this.version = "2.0.0";
            this.tpl = super.tpl.replace('modal','sidepanel');
            this.tpl = this.tpl.replace('data-sidepanel=""','data-sidepanel="left"');
            this.describe();
        }
        onCreate(){
            this.sidepanel = this.sidepanel ?? this.getData('sidepanel','left');
            this.el.setAttribute('data-sidepanel', this.sidepanel);
            this.el.classList.add('modal');
            super.onCreate();
        }
    }
    return Sidepanel;
}