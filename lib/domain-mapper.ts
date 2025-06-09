// 클라이언트 사이드 도메인 매핑
// 서버 사이드 fs 모듈을 사용할 수 없으므로 하드코딩된 매핑 사용

interface DomainMapping {
  origin: string;
  domain: string;
}

// 도메인 매핑 데이터 (클라이언트용 - 필요시 API로 가져올 수 있음)
const DOMAIN_MAPPINGS: DomainMapping[] = [
  { origin: "pbn1", domain: "https://www.healthylivingblog24.com" },
  { origin: "pbn2", domain: "https://www.fitnessmotivation24.com" },
  { origin: "pbn3", domain: "https://www.nutritionadvicetips.com" },
  { origin: "pbn4", domain: "https://www.wellnesslifejourney.com" },
  { origin: "pbn5", domain: "https://www.mindfullivingblog.com" },
  { origin: "pbn6", domain: "https://www.organicfoodguide24.com" },
  { origin: "pbn7", domain: "https://www.yogameditationlife.com" },
  { origin: "pbn8", domain: "https://www.naturalremedieshealth.com" },
  { origin: "pbn9", domain: "https://www.holisticwellnessblog.com" },
  { origin: "pbn10", domain: "https://v0-pbn10.vercel.app" },
  { origin: "pbn11", domain: "https://www.energyboostdaily.com" },
  { origin: "pbn12", domain: "https://www.sleepbettertonight.com" },
  { origin: "pbn13", domain: "https://www.stressfreeliving24.com" },
  { origin: "pbn14", domain: "https://www.immuneboosters24.com" },
  { origin: "pbn15", domain: "https://www.heartHealthDaily.com" },
  { origin: "pbn16", domain: "https://www.digestiveHealthTips.com" },
  { origin: "pbn17", domain: "https://www.skincarenaturally24.com" },
  { origin: "pbn18", domain: "https://www.mentalwellbeingblog.com" },
  { origin: "pbn19", domain: "https://www.fitnessafterfifty.com" },
  { origin: "pbn20", domain: "https://www.weightlossnaturally.com" },
  { origin: "pbn21", domain: "https://www.musclebuildingguide.com" },
  { origin: "pbn22", domain: "https://www.cardioworkoutdaily.com" },
  { origin: "pbn23", domain: "https://www.flexibilitytraining24.com" },
  { origin: "pbn24", domain: "https://v0-pbn24.vercel.app" },
  { origin: "pbn25", domain: "https://www.runningforhealth24.com" },
  { origin: "pbn26", domain: "https://www.cyclingfitnesslife.com" },
  { origin: "pbn27", domain: "https://www.swimmingworkouts24.com" },
  { origin: "pbn28", domain: "https://www.hikingadventureblog.com" },
  { origin: "pbn29", domain: "https://www.outdoorfitnesslife.com" },
  { origin: "pbn30", domain: "https://www.homefitnessguide24.com" },
  { origin: "pbn31", domain: "https://www.crosstrainingblog.com" },
  { origin: "pbn32", domain: "https://www.pilateseveryday.com" },
  { origin: "pbn33", domain: "https://www.dancefitnesslife.com" },
  { origin: "pbn34", domain: "https://www.martialartswellness.com" },
  { origin: "pbn35", domain: "https://www.athleticperformance24.com" },
  { origin: "pbn36", domain: "https://www.sportsnutritionblog.com" },
  { origin: "pbn37", domain: "https://www.injuryprevention24.com" },
  { origin: "pbn38", domain: "https://www.rehabilitationfitness.com" },
  { origin: "pbn39", domain: "https://www.elderlyfitnessguide.com" },
  { origin: "pbn40", domain: "https://www.teenfitnesslife.com" },
  { origin: "pbn41", domain: "https://www.womenshealth24blog.com" },
  { origin: "pbn42", domain: "https://www.menshealthdaily24.com" },
  { origin: "pbn43", domain: "https://www.pregnancyfitnessblog.com" },
  { origin: "pbn44", domain: "https://www.postpartumwellness.com" },
  { origin: "pbn45", domain: "https://www.familyfitnesslife.com" },
  { origin: "pbn46", domain: "https://www.childnutritionguide.com" },
  { origin: "pbn47", domain: "https://www.babyhealthdaily.com" },
  { origin: "pbn48", domain: "https://www.parentingwellnessblog.com" },
  { origin: "pbn49", domain: "https://www.workplacewellness24.com" },
  { origin: "pbn50", domain: "https://www.corporatehealthblog.com" },
  { origin: "pbn51", domain: "https://www.travelfitnessblog.com" },
  { origin: "pbn52", domain: "https://www.vacationwellness24.com" },
  { origin: "pbn53", domain: "https://www.budgetfitnesslife.com" },
  { origin: "pbn54", domain: "https://www.luxurywellnessblog.com" },
  { origin: "pbn55", domain: "https://www.eco-friendly-health.com" },
  { origin: "pbn56", domain: "https://www.sustainablewellness24.com" },
  { origin: "pbn57", domain: "https://v0-pbn57.vercel.app" },
  { origin: "pbn58", domain: "https://www.veganfitnesslife.com" },
  { origin: "pbn59", domain: "https://www.paleodietblog24.com" },
  { origin: "pbn60", domain: "https://www.ketolifestyleblog.com" },
  { origin: "pbn61", domain: "https://www.mediterraneandiet24.com" },
  { origin: "pbn62", domain: "https://www.plantbasedhealth24.com" },
  { origin: "pbn63", domain: "https://www.glutenfreeliving24.com" },
  { origin: "pbn64", domain: "https://www.allergyfriendlyfoods.com" },
  { origin: "pbn65", domain: "https://www.diabeticfriendlymeals.com" },
  { origin: "pbn66", domain: "https://www.lowsodiumcooking24.com" },
  { origin: "pbn67", domain: "https://www.cholesterolcontrol24.com" },
  { origin: "pbn68", domain: "https://v0-pbn68.vercel.app" },
  { origin: "pbn69", domain: "https://www.antiinflammatory24.com" },
  { origin: "pbn70", domain: "https://www.superfoods-daily24.com" },
  { origin: "pbn71", domain: "https://v0-pbn71.vercel.app" },
  { origin: "pbn72", domain: "https://www.hydrationhealth24.com" },
  { origin: "pbn73", domain: "https://www.detoxcleanseguide.com" },
  { origin: "pbn74", domain: "https://www.fastingforhealth24.com" },
  { origin: "pbn75", domain: "https://www.mindfulnessmeditation24.com" },
  { origin: "pbn76", domain: "https://www.breathworkdaily.com" },
  { origin: "pbn77", domain: "https://www.relaxationtechniques24.com" },
  { origin: "pbn78", domain: "https://v0-pbn78.vercel.app" },
  { origin: "pbn79", domain: "https://www.positivethinking24.com" },
  { origin: "pbn80", domain: "https://v0-pbn80.vercel.app" },
];

/**
 * 프로젝트 이름(origin)으로 도메인을 조회하는 함수
 * @param origin 프로젝트 이름 (예: "pbn1", "pbn2")
 * @returns 해당 도메인 문자열 또는 null
 */
export function getDomainByOrigin(origin: string): string | null {
  const mapping = DOMAIN_MAPPINGS.find((item) => item.origin === origin);
  return mapping ? mapping.domain : null;
}

/**
 * 현재 프로젝트의 도메인을 자동으로 감지하는 함수 (클라이언트용)
 * window.location이나 기타 클라이언트 정보를 활용
 * @returns 현재 프로젝트의 도메인 또는 기본값
 */
export function getCurrentProjectDomain(): string {
  try {
    // 브라우저 환경에서 현재 URL 확인
    if (typeof window !== "undefined") {
      const currentHostname = window.location.hostname;

      // vercel.app 도메인인 경우 프로젝트명 추출
      if (currentHostname.includes("vercel.app")) {
        const projectMatch = currentHostname.match(/v0-(pbn\d+)\.vercel\.app/);
        if (projectMatch) {
          const projectName = projectMatch[1];
          const domain = getDomainByOrigin(projectName);
          if (domain) {
            return domain;
          }
        }
      }

      // 커스텀 도메인인 경우 매핑에서 찾기
      const customDomain = DOMAIN_MAPPINGS.find((mapping) =>
        mapping.domain.includes(currentHostname)
      );
      if (customDomain) {
        return customDomain.domain;
      }
    }

    // 개발 환경이나 감지 실패시 pbn3 기본값 사용
    return getDomainByOrigin("pbn3") || "https://www.nutritionadvicetips.com";
  } catch (error) {
    console.error("현재 프로젝트 도메인 감지 중 오류:", error);
    return "https://www.nutritionadvicetips.com"; // 기본값
  }
}

/**
 * 프로젝트 이름으로 도메인을 조회하되, 없으면 기본값을 반환
 * @param origin 프로젝트 이름
 * @param defaultDomain 기본 도메인 (선택사항)
 * @returns 도메인 문자열
 */
export function getDomainWithFallback(
  origin: string,
  defaultDomain = "https://www.nutritionadvicetips.com"
): string {
  const domain = getDomainByOrigin(origin);
  return domain || defaultDomain;
}
