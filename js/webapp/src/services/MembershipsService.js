import {isValidForMembership} from "../policies/MembershipPolicies";

export default class MembershipsService {

  constructor(user) {
    this.user = user
  }

  setMemberships() {

  }

  removeMembership() {

  }

  mergeMembership() {

  }

  submitMembershipRequest() {
    if (isValidForMembership(this.user)) {
      // LOGIC
    }
  }
}
