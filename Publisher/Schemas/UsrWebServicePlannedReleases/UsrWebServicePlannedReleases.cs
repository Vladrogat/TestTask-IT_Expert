namespace Terrasoft.Configuration.UsrWebServicePlannedReleases
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.Entities;
    using System.Linq;
    using System.Collections.Generic;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrWebServicePlannedReleases : BaseService
    {

        /// <summary>
        /// Метод, возвращающий количество запланированных выпусков
        /// </summary>
        /// <param name="code">Строковый код издания</param>
        /// <returns></returns>
        [OperationContract]
        [WebInvoke(Method = "POST")]
        public int GetCountPlannedReleasesByCode(string code)
        {
            if (!String.IsNullOrWhiteSpace(code))
            {
                // http://localhost:82/0/rest/UsrWebServicePlannedReleases/GetCountPlannedReleasesByCode

                const string STATUS_ID = "97222212-87c6-4e6c-af31-445dda25d584";
                var issues = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrEntityIssues");

                var statusId = issues.AddColumn("UsrStatus.Id").Name;
                var codePub = issues.AddColumn("UsrPublish.UsrCode").Name;
                var issuesFilterPublishId = issues.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrPublish.UsrCode", code);
                var issuesFilterStatusId = issues.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrStatus.Id", STATUS_ID);
                issues.Filters.Add(issuesFilterPublishId);
                issues.Filters.Add(issuesFilterStatusId);
                var releases = issues.GetEntityCollection(UserConnection);

                if (releases.Any())
                {
                    return releases.Count;
                }
            }
            return -1;
        }
    }
}