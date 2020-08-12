import React, {useCallback} from 'react';
import MembershipsService from "../shared/services/MembershipsService";

export const Membership = () => {

  const service = new MembershipsService()

  return (
    <div>
      <button onClick={service.setMemberships}>Set Memberships</button>
      <button onClick={service.removeMembership}>Remove Memberships</button>
      <button onClick={service.mergeMembership}>Merge Memberships</button>
      <button onClick={service.submitMembershipRequest}>Submit MembershipRequest</button>
    </div>
  )
}
