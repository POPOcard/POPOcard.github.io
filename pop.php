<?php
session_start();

// 定义允许访问的密码
$allowedPassword = 'enshui123';

// 检查用户是否已经登录
if (!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true) {
    // 未登录
    if (isset($_POST['password']) && $_POST['password'] === $allowedPassword) {
        // 登录成功，创建会话
        $_SESSION['loggedIn'] = true;
        $_SESSION['loginAttempts'] = 0;
    } else {
        // 登录失败，增加错误计数
        if (!isset($_SESSION['loginAttempts'])) {
            $_SESSION['loginAttempts'] = 0;
        }
        $_SESSION['loginAttempts']++;
    }
}

// 检查登录限制
if (isset($_SESSION['loginAttempts'])) {
    $maxAttempts = 10;
    $maxAttemptsTimeframe = 24 * 60 * 60; // 24小时
    $maxAttemptsBlockedTime = 10 * 60; // 10分钟

    if ($_SESSION['loginAttempts'] >= $maxAttempts) {
        // 达到最大尝试次数，检查是否已经超过时间限制
        $lastAttemptTime = isset($_SESSION['lastAttemptTime']) ? $_SESSION['lastAttemptTime'] : 0;
        $currentTime = time();

        if (($currentTime - $lastAttemptTime) < $maxAttemptsTimeframe) {
            // 在时间限制内，无法登录
            $remainingTime = $maxAttemptsTimeframe - ($currentTime - $lastAttemptTime);
            $errorMessage = '您已经达到最大尝试次数，请等待' . gmdate('H:i:s', $remainingTime) . '后再尝试登录。';
            exit($errorMessage);
        } else {
            // 超过时间限制，重置计数器
            $_SESSION['loginAttempts'] = 0;
        }
    } elseif ($_SESSION['loginAttempts'] >= 3) {
        // 达到连续错误登录次数，设置最后尝试时间
        $_SESSION['lastAttemptTime'] = time();

        // 在连续错误登录次数达到3次时，禁止登录一段时间
        $errorMessage = '您已连续错误登录3次，请等待10分钟后再尝试登录。';
        exit($errorMessage);
    }
}
?>
