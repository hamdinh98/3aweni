import styles from "./css/list.module.css";


const Comments_List = () => {

    return (
        <div class="container mb-5 mt-5">
            <div className={styles.card}>
                <div className="row">
                    <div class="col-md-12">
                        <h3 class="text-center mb-5"> Comments </h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div className={styles.media}> <img class="mr-3 rounded-circle" alt="Bootstrap Media Preview" src="https://i.imgur.com/stD0Q19.jpg" />
                                    <div class="media-body">
                                        <div class="row">
                                            <div class="col-8 d-flex">
                                                <h5>Maria Smantha</h5> <span>- 2 hours ago</span>
                                            </div>
                                            <div class="col-4">
                                                <div class="pull-right reply"> <a href="#"><span><i class="fa fa-reply"></i> reply</span></a> </div>
                                            </div>
                                        </div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet magna porttitor, lobortis nunc in, placerat dui. Nunc sagittis, ligula sit amet sollicitudin maximus, lorem velit ultricies orci, sed mattis ligula metus id diam. Proin non sollicitudin augue. Proin pulvinar arcu odio, vel dictum orci auctor non. Sed non urna mattis, tempor massa nec <div class="media mt-4"> <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="https://i.imgur.com/xELPaag.jpg" /></a>
                                            <div class="media-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <h5>Simona Disa</h5> <span>- 3 hours ago</span>
                                                    </div>
                                                </div> Sed eget eros ex. Nullam quis velit condimentum, lacinia odio nec, iaculis diam. Pellentesque tempus neque nec nibh sodales porttitor. Nullam vel vestibulum elit. Aliquam et est erat. Suspendisse dapibus et ligula id cursus. Etiam placerat ullamcorper urna, quis dictum risus pellentesque ut. Proin vitae sollicitudin lacus
                                            </div>
                                        </div>
                                        <div class="media mt-3"> <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="https://i.imgur.com/nAcoHRf.jpg" /></a>
                                            <div class="media-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <h5>John Smith</h5> <span>- 4 hours ago</span>
                                                    </div>
                                                </div> Fusce venenatis lobortis magna sit amet feugiat. Vestibulum libero leo, mattis ac nisl non, euismod congue nibh. Mauris diam augue, molestie in fringilla ac, elementum ac ipsum. Etiam sed vulputate turpis, non tempus massa. Nam iaculis lacinia quam, id malesuada lacus lacinia in.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



}
export default Comments_List