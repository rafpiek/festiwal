import {isValidForMembership} from "../policies/MembershipPolicies";
import ValidForMembership from "../policies/ValidForMembership";

export default class MembershipsService {

  constructor(user) {
    this.user = user
  }

  setMemberships() {

  }

  removeMembership() {

  }

  mergeMembership() {
    const validForMembership = new ValidForMembership(this.user)

    if (validForMembership.apply()) {
      // do the logic
    }

  }

  submitMembershipRequest() {
    if (isValidForMembership(this.user)) {
      // LOGIC
    }
  }
}
