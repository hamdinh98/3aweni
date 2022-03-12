import CounterItem from "../../components/Home/CounterItem"



const CounterSection = () => {
    const counters = [
        {
            title: "We’ve Project Complate",
            count: 3598
        },
        {
            title: "Awards Winning",
            count: 8565
        },
        {
            title: "Active Volunteer",
            count: 4756
        },
    ]

    const ListCounters = counters.map((e, key) => {
        return <CounterItem title={e.title} count={e.count} index={key} />
    })
    return (

        <section className="counter-section-one mt-negative">

            <div className="container primary-bg">
                <div className="row counter-boxes justify-content-xl-between justify-content-center">
                    {ListCounters}
                </div>
            </div>
        </section>
    )
}




export default CounterSection