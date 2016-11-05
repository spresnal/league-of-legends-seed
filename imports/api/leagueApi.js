import { Meteor } from 'meteor/meteor';
import '../api/helpers/requestHelper.js';

const apiVersion = "v2.5";

Meteor.methods({
    getLeaguesBySummonerNames: function (v) {
        this.unblock();
        return Meteor.http.call('GET', requestHelper.buildUrl(apiVersion, `/league/by-summoner/${v.summonerIds}`));
    },
    getLeagueEntriesBySummonerNames: function (v) {
        this.unblock();
        return Meteor.http.call('GET', requestHelper.buildUrl(apiVersion, `/league/by-summoner/${v.summonerIds}/entry`));
    }
});