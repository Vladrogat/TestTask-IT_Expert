namespace Terrasoft.Configuration.UsrWebServicePlannedReleases
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.Entities;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrWebServicePlannedReleases : BaseService
    {

        /* Метод, возвращающий количество запланированных выпусков */
        [OperationContract]
        [WebInvoke(Method = "POST")]
        public int GetCountPlannedReleasesByCode(string code)
        {
            /* 
             * http://localhost:82/0/rest/UsrWebServicePlannedReleases/GetCountPlannedReleasesByCode
             * "ru2"
             * result = 2
            */
            var result = 0;
            var publisher = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrPublisher");

            publisher.AddColumn("UsrCode");
            var colOwner = publisher.AddColumn("UsrOwner");

            publisher.Filters.Add(publisher.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrCode", code));

            var publish = publisher.GetEntityCollection(UserConnection);

            /* Если данные получены. */

            if (publish.Count > 0)
            {
                var owner = publish[0].GetColumnValue(colOwnerId.Name + "Id").ToString();

                var issues = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrEntityIssues");

                issues.AddColumn("UsrOwner");
                var colStatusId = issues.AddColumn("UsrStatus");

                var issuesFilter = issues.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrOwner", ownerId);
                issues.Filters.Add(issuesFilter);
                var releases = issues.GetEntityCollection(UserConnection);
                if (releases.Count > 0)
                {
                    return releases.Count;
                    foreach (var release in releases)
                    {
                        var statusId = release.GetColumnValue(colStatusId.Name + "Id").ToString();
                        var status = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrStatusIssue");
                        status.AddColumn("Id");
                        var statusName = status.AddColumn("Name");
                        var statusFilter = status.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", statusId);
                        status.Filters.Add(statusFilter);

                        if (status.GetEntityCollection(UserConnection)[0].GetColumnValue(statusName.Name).ToString() == "Запланирован")
                        {
                            result++;
                        }
                    }
                    return result;
                }
            }
            return -1;
        }
    }
}