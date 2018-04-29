import React from "react";
import moment from "moment";
import { connect } from "react-redux"; 
import { Grid } from "material-ui";
import { selectSignIn, selectSignOut } from "../../selectors/accounts";

import { RegularCard, Table, ItemGrid } from "components";

const TableList = (props) => (
  <Grid container>
    <ItemGrid xs={12} sm={12} md={12}>
      <RegularCard
        headerColor="orange"
        cardTitle="Signed In"
        cardSubtitle="These visitors are still in the building"
        content={
          <Table
            tableHeaderColor="primary"
            tableHead={["#", "Name", "Contact Person", "SignIn", "SignOut"]}
            tableData={ props.signIn }
          />
        }
      />
    </ItemGrid>
    <ItemGrid xs={12} sm={12} md={12}>
      <RegularCard
        headerColor="green"
        cardTitle="Signed Out"
        cardSubtitle="These visitors have successfully signed out"
        content={
          <Table
            tableHeaderColor="primary"
            tableHead={["#", "Name", "Contact Person", "SignIn", "SignOut"]}
            tableData={ props.signOut }
          />
        }
      />
    </ItemGrid>
  </Grid>
);

const mapStateToProps = (state) => {
  return {
    signIn: selectSignIn(state.accounts, state.filters),
    signOut: selectSignOut(state.accounts, state.filters)
  };
};

export default connect(mapStateToProps)(TableList);
