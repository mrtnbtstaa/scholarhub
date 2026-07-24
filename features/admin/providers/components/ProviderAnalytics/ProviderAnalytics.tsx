import GridAnalyticCards from "@/components/shared/GridAnalyticCards/GridAnalyticCards"
import AnalyticItem from "./AnalyticItem";

const ProviderAnalytics = () => {
    return (
        <GridAnalyticCards>
            <AnalyticItem title="Total Providers" count={182} />
            <AnalyticItem title="Verified" count={182} />
            <AnalyticItem title="Pending" count={182} />
            <AnalyticItem title="Gov. Agencies" count={182} />
            <AnalyticItem title="Universities" count={182} />
            <AnalyticItem title="NGOs & Private" count={182} />
        </GridAnalyticCards>
    )
}

export default ProviderAnalytics;