import PageTitle from "@/components/shared/PageTitle/PageTitle"

const DashboardPage = () => {
    return (
        <section>
            <PageTitle title="Dashboard" />
            <div className="bg-[#e7f0f8] rounded-md p-4 mt-4">
                <p className="text-secondary text-2xl tracking-wide leading-none font-semibold">Welcome to ScholarHub!</p>
            </div>
            {/* <p className="tracking-wide text-primary text-sm">Discover verified academic opportunities worldwide. Our intelligence engine has matched you with over 45 international grants based on your profile.</p> */}
        </section>
    )
}

export default DashboardPage;