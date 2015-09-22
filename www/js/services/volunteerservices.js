clienteling.service('VolunteerService', function () {
    this.getVolunteer= function(leadId) {
        return list[leadId];
    };

    this.getVolunteerList = function () {
        return list;
    };
});