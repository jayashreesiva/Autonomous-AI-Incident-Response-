// AI Incident Responder - Backend Logic
// This is a frontend demo of backend-style incident processing.

function analyzeSecurityLog(logText) {

    logText = logText.toLowerCase();

    let attack = "Normal Activity";
    let severity = "LOW";
    let analysis = "No suspicious activity was detected.";
    let response = "Continue monitoring the system.";

    // Brute force detection
    if (
        logText.includes("failed login") ||
        logText.includes("multiple login") ||
        logText.includes("brute force") ||
        logText.includes("too many attempts")
    ) {
        attack = "Brute Force Attack";
        severity = "HIGH";

        analysis =
            "Multiple failed login attempts were detected. " +
            "The activity may indicate a brute force attack.";

        response =
            "Block the suspicious source and review the affected account.";
    }

    // Unauthorized access detection
    else if (
        logText.includes("unauthorized") ||
        logText.includes("access denied") ||
        logText.includes("forbidden")
    ) {
        attack = "Unauthorized Access";
        severity = "HIGH";

        analysis =
            "An attempt to access a restricted resource was detected.";

        response =
            "Restrict the suspicious source and verify user permissions.";
    }

    // Malware detection
    else if (
        logText.includes("malware") ||
        logText.includes("virus") ||
        logText.includes("trojan")
    ) {
        attack = "Malware Activity";
        severity = "CRITICAL";

        analysis =
            "The security log contains indicators of possible malware activity.";

        response =
            "Isolate the affected system and perform a security investigation.";
    }

    // Suspicious activity
    else if (
        logText.includes("suspicious") ||
        logText.includes("anomaly") ||
        logText.includes("unusual")
    ) {
        attack = "Suspicious Activity";
        severity = "MEDIUM";

        analysis =
            "Unusual activity was detected in the security log.";

        response =
            "Monitor the affected system and investigate the activity.";
    }

    return {
        attack: attack,
        severity: severity,
        analysis: analysis,
        response: response
    };
}