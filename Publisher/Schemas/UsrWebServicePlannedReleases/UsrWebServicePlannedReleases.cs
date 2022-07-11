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
            */
            var result = 0;
            var publisher = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrPublisher");

            publisher.AddColumn("UsrCode");
            var colId = publisher.AddColumn("Id");

            publisher.Filters.Add(publisher.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrCode", code));

            var publish = publisher.GetEntityCollection(UserConnection);

            /* Если данные получены. */
            if (publish.Count > 0)
            {
                var issues = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrEntityIssues");

                issues.AddColumn("UsrPublish");
                var colStatusId = issues.AddColumn("UsrStatus");

                var issuesFilter = issues.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrPublish", publish[0].GetColumnValue(colId.Name).ToString());
                issues.Filters.Add(issuesFilter);
                var releases = issues.GetEntityCollection(UserConnection);
                if (releases.Count > 0)
                {
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
                }
                return result;
            }
            return -1;
        }
    }
}