using System;
using System.Linq;
using System.Linq.Expressions;

namespace backend.Helpers
{
    
    public static class LinqExtensions
    {
        /// <summary>
        /// Linq Extension to support adding a where clause to the query only if the passed in condition is true
        /// ex: we only query for cars with or without sunroofs if the filter for sunroofs is not null. If it is null, it means we want all cars regardless of sunroof type, so do not query for that filter
        /// </summary>
        /// <param name="query"></param>
        /// <param name="condition"></param>
        /// <param name="whereClause"></param>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static IQueryable<T> WhereIf<T>(this IQueryable<T> query, bool condition, Expression<Func<T, bool>> whereClause)
        {
            if (condition)
            {
                return query.Where(whereClause);
            }
            return query;
        }
    }
}