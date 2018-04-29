import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Update,
  Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";
import { startReportAccounts } from "../../actions/report";
import { selectVisitor, selectChartData } from "../../selectors/report";

import {
  StatsCard,
  ChartCard,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart
} from "variables/charts";

import dashboardStyle from "variables/styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.startReportAccounts();
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    let rData = {};
    rData = this.props.data;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ContentCopy}
              iconColor="orange"
              title="Appointments"
              description="70"
              statIcon={Update}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Store}
              iconColor="green"
              title="Interviews"
              description="34"
              statIcon={Update}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Vendors"
              description="75"
              statIcon={Update}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="blue"
              title="Guests"
              description="15"
              statIcon={Update}
              statText="Last 24 Hours"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={{ ...rData }}
                  type="Bar"
                  options={{ 
                    ...emailsSubscriptionChart.options, 
                    high: (Object.keys(rData).length !== 0 ? Math.max(...rData.series[0]) + 5 : "pppp") 
                  }}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="Bar Chart"
              text="Dates against total number of visitors"
              statIcon={Update}
              statText="Last 24 Hours"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={{ ...rData }}
                  type="Line"
                  options={{
                    ...emailsSubscriptionChart.options,
                    high: (Object.keys(rData).length !== 0 ? Math.max(...rData.series[0]) + 5 : "pppp")
                  }}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="Line Chart"
              text="Dates against total number of visitors"
              statIcon={Update}
              statText="Last 24 Hours"
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const Report = withStyles(dashboardStyle)(Dashboard);

const mapStateToProps = (state) => ({
  visitor: selectVisitor(state.reports, state.rFilters),
  data: selectChartData(state.reports)
});

const mapDispatchToProps = (dispatch) => ({
  startReportAccounts: () => dispatch(startReportAccounts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);