import React from "react";
import PoliciesInitiativesStatic from "../../components/PoliciesInitiatives/PoliciesInitiativesStatic";
import Layout from "../../components/shared/Layout/Layout";
import LogoBanner from "../../components/shared/LogoBanner/LogoBanner";
function PoliciesInitiatives() {
  return (
    <>
        <Layout>
      {/* <LogoBanner title="Policies + Initiatives" /> */}
          <PoliciesInitiativesStatic />
        </Layout>
    </>
  );
}

export default PoliciesInitiatives;
